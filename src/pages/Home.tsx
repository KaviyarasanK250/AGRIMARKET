import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Leaf, 
  ShoppingCart, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Fresh & Organic',
      description: 'Direct from farms to your table with guaranteed freshness'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Support Local Farmers',
      description: 'Help local farmers by buying directly from them'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Quality Guaranteed',
      description: 'All products are quality checked before delivery'
    }
  ];

  const benefits = [
    'Fresh, organic produce delivered to your doorstep',
    'Support local farmers and sustainable agriculture',
    'Transparent pricing with no hidden costs',
    'Wide variety of seasonal fruits and vegetables',
    'Quality guarantee on all products'
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Fresh Farm Products
            <span className="text-green-600 block mt-2">Delivered to You</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect directly with local farmers and get the freshest organic produce, 
            grains, and dairy products delivered straight to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Shop Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            {!user && (
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                Join Our Community
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose FarmMarket?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to connecting you with the finest local produce 
            while supporting sustainable farming practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience the Farm-to-Table Difference
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Fresh vegetables"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-600/20 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {user?.role === 'user' && (
        <section className="text-center py-16 bg-green-600 text-white rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our wide selection of fresh, organic products and 
            support local farmers in your community.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Browse Products
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </section>
      )}

      {user?.role === 'admin' && (
        <section className="text-center py-16 bg-blue-600 text-white rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Welcome, Admin!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Manage your marketplace, add new products, and track orders 
            from your admin dashboard.
          </p>
          <Link
            to="/admin"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Go to Dashboard
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </section>
      )}
    </div>
  );
};

export default Home;