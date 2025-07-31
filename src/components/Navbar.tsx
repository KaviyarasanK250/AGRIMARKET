import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { 
  ShoppingCart, 
  User, 
  LogOut, 
  Leaf, 
  Home, 
  Package,
  ShoppingBag,
  Settings
} from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { getItemCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-green-600 hover:text-green-700">
            <Leaf className="h-8 w-8" />
            <span className="text-xl font-bold">FarmMarket</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/products" 
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Package className="h-4 w-4" />
              <span>Products</span>
            </Link>

            {user?.role === 'admin' && (
              <>
                <Link 
                  to="/admin" 
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
                <Link 
                  to="/admin/products" 
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  Manage Products
                </Link>
                <Link 
                  to="/admin/orders" 
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  Manage Orders
                </Link>
              </>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.role === 'user' && (
                  <>
                    <Link
                      to="/cart"
                      className="relative flex items-center text-gray-700 hover:text-green-600 transition-colors"
                    >
                      <ShoppingCart className="h-6 w-6" />
                      {getItemCount() > 0 && (
                        <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                          {getItemCount()}
                        </span>
                      )}
                    </Link>
                    <Link
                      to="/orders"
                      className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      <span className="hidden sm:inline">Orders</span>
                    </Link>
                  </>
                )}
                
                <div className="flex items-center space-x-2">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span className="hidden sm:inline">{user.name}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;