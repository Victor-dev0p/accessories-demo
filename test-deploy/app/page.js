'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, Heart, ChevronRight, Star, Filter } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Anti Slip Wardrobe Hanger",
      price: "₦4,800",
      colors: "Black and gold",
      length: "3 meter",
      category: "hangers",
      featured: true
    },
    {
      id: 2,
      name: "Rotating Clothes Rack",
      price: "₦25,000",
      colors: "Brown and Grey",
      category: "racks",
      featured: true
    },
    {
      id: 3,
      name: "Adjustable Trouser Rack (Soft Closing)",
      price: "₦95,000",
      colors: "Mocha",
      length: "800mm and 900mm",
      category: "racks",
      featured: false
    },
    {
      id: 4,
      name: "Adjustable Shoe Display Hanger",
      price: "₦2,600",
      colors: "Black",
      length: "215mm",
      category: "hangers",
      featured: false
    },
    {
      id: 5,
      name: "Pull Down Wardrobe Hanger",
      price: "₦35,000",
      colors: "Grey",
      length: "600-900mm adjustable",
      category: "hangers",
      featured: false
    },
    {
      id: 6,
      name: "Finger Print/Passcode Safety Box",
      price: "₦124,000 - ₦140,000",
      colors: "Grey",
      length: "500mm and 654mm",
      category: "storage",
      featured: true
    },
    {
      id: 7,
      name: "Automatic Wardrobe Hanger",
      price: "₦240,000",
      colors: "Silver",
      length: "500-900mm adjustable",
      category: "hangers",
      featured: false
    },
    {
      id: 8,
      name: "Soft Close Sorting Box",
      price: "₦145,000",
      colors: "Brown and Grey",
      length: "600mm and 900mm",
      category: "storage",
      featured: false
    },
    {
      id: 9,
      name: "Hands Full Hooks Wardrobe Hanger",
      price: "₦80,000",
      colors: "Mocha, black, brown, & grey",
      length: "500-900mm adjustable",
      category: "hangers",
      featured: false
    },
    {
      id: 10,
      name: "Rattan Pull-Out Basket (Soft Closing)",
      price: "₦55,000",
      colors: "Black",
      length: "800mm and 900mm",
      category: "storage",
      featured: true
    },
    {
      id: 11,
      name: "Sensor Hanger",
      price: "₦25,000",
      colors: "Black",
      length: "800mm, and 1 meter",
      category: "hangers",
      featured: false
    },
    {
      id: 12,
      name: "Adjustable Trouser Rack (Soft Closing)",
      price: "₦85,000",
      colors: "Grey",
      length: "800mm and 1000mm",
      category: "racks",
      featured: false
    },
    {
      id: 13,
      name: "Basic LED Hanger",
      price: "₦18,000",
      colors: "Grey",
      length: "2 meter",
      category: "hangers",
      featured: false
    },
    {
      id: 14,
      name: "Luxury 90°Square LED Hanger with Anti-slip",
      price: "₦43,000",
      colors: "Black",
      length: "With lights",
      category: "hangers",
      featured: true
    },
    {
      id: 15,
      name: "Glide Socket with USB",
      price: "₦28,000",
      colors: "Black",
      socket: "2 sockets with 1 USB port",
      category: "accessories",
      featured: false
    },
    {
      id: 16,
      name: "Tie and Belt Rack (Soft Closing)",
      price: "₦75,000",
      colors: "Grey",
      category: "racks",
      featured: false
    },
    {
      id: 17,
      name: "Adjustable Jewelry Box (20 Runners)",
      price: "₦162,000",
      colors: "Grey, black & grey, and black & beige",
      length: "500-900mm adjustable",
      category: "storage",
      featured: false
    },
    {
      id: 18,
      name: "Side Mount Trouser Rack (Soft Closing)",
      price: "₦85,000",
      colors: "Grey",
      category: "racks",
      featured: false
    },
    {
      id: 19,
      name: "360 Console Orbit Rack",
      price: "₦230,000",
      colors: "Mocha, and grey",
      category: "racks",
      featured: false
    },
    {
      id: 20,
      name: "300 Rotating Shoe Rack",
      price: "₦145,000",
      colors: "Black",
      steps: "It and 10",
      category: "racks",
      featured: false
    },
    {
      id: 21,
      name: "Rechargeable Torch with Wireless Charger",
      price: "₦35,000",
      colors: "Black",
      socket: "1 socket",
      category: "accessories",
      featured: false
    },
    {
      id: 22,
      name: "Rotating Top Mount Trouser/Garment Rack",
      price: "₦70,000",
      colors: "Brown and Grey",
      category: "racks",
      featured: false
    },
    {
      id: 23,
      name: "Concealable Fingerprint/Passcode Safety Box",
      price: "₦450,000",
      colors: "Grey",
      category: "storage",
      featured: true
    },
    {
      id: 24,
      name: "Adjustable Jewelry Box (20 Runners)",
      price: "₦162,000",
      colors: "Grey, black & grey, and black & beige",
      length: "500-900mm adjustable",
      category: "storage",
      featured: false
    },
    {
      id: 25,
      name: "24 Rods Top Mount Trouser/Garment Rack (Soft Closing)",
      price: "₦100,000",
      colors: "Orange",
      category: "racks",
      featured: false
    },
    {
      id: 26,
      name: "Automatic Wardrobe Lift",
      price: "₦550,000",
      colors: "Grey",
      length: "600-900 mm adjustable",
      category: "hangers",
      featured: true
    },
    {
      id: 27,
      name: "24 Rods Top Mount Trouser/Garment Rack (Soft Closing)",
      price: "₦100,000",
      colors: "Grey",
      category: "racks",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏪' },
    { id: 'hangers', name: 'Hangers', icon: '👔' },
    { id: 'racks', name: 'Racks', icon: '📏' },
    { id: 'storage', name: 'Storage', icon: '📦' },
    { id: 'accessories', name: 'Accessories', icon: '✨' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">W</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent tracking-tight">
                  Wardrobe Accessories
                </h1>
                <p className="text-xs text-gray-600 tracking-wide">Premium Organization</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Contact</a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">Search</span>
              </button>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-6 h-6 text-gray-700" />
              </button>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-amber-700 font-medium">Home</a>
              <a href="#products" className="block text-gray-700 hover:text-amber-700 font-medium">Products</a>
              <a href="#about" className="block text-gray-700 hover:text-amber-700 font-medium">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-amber-700 font-medium">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className={`relative overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold animate-pulse">
                ✨ Premium Quality Products
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mt-2">
                  Wardrobe Space
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our premium collection of wardrobe accessories designed to maximize space, 
                enhance organization, and bring luxury to your daily routine.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
                  <span>Shop Now</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold hover:shadow-lg border-2 border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                  View Catalog
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5.0</div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🏪</div>
                    <p className="text-gray-600 font-medium">Premium Wardrobe Accessories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Shop by Category</h3>
            <button className="flex items-center space-x-2 text-amber-700 hover:text-amber-800 font-medium">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow-lg'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                }`}
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <div className="font-semibold">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Collection
            </h2>
            <p className="text-xl text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-square">
                  <div className="absolute top-4 right-4 z-10">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {product.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="text-gray-400 text-6xl">
                      {product.category === 'hangers' ? '👔' : 
                       product.category === 'racks' ? '📏' : 
                       product.category === 'storage' ? '📦' : '✨'}
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-amber-700 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  <div className="space-y-1 text-sm text-gray-600">
                    {product.colors && (
                      <div className="flex items-start space-x-2">
                        <span className="font-medium text-gray-700 whitespace-nowrap">Colors:</span>
                        <span className="line-clamp-2">{product.colors}</span>
                      </div>
                    )}
                    {product.length && (
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-700">Length:</span>
                        <span>{product.length}</span>
                      </div>
                    )}
                    {product.socket && (
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-700">Socket:</span>
                        <span>{product.socket}</span>
                      </div>
                    )}
                    {product.steps && (
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-700">Steps:</span>
                        <span>{product.steps}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="text-xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                      {product.price}
                    </div>
                    <button 
                      onClick={addToCart}
                      className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600">Premium quality and exceptional service</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:bg-amber-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery across Nigeria</p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:bg-amber-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the best materials</p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:bg-amber-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Warranty</h3>
              <p className="text-gray-600">Protected purchase guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Browse our complete catalog and find the perfect accessories for your wardrobe
          </p>
          <button className="px-10 py-4 bg-white text-amber-700 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Wardrobe Accessories</h3>
              <p className="text-gray-400">Premium organization solutions for modern living</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-amber-500 transition-colors">Products</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Hangers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Racks</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Storage</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +234 XXX XXX XXXX</li>
                <li>📧 info@wardrobeaccessories.com</li>
                <li>📍 Abuja, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2026 Wardrobe Accessories. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}