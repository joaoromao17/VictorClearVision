
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tipos de Lentes', href: '/tipos-de-lentes' },
    { name: 'Serviços Extras', href: '/servicos-extras' },
    { name: 'Como Funciona', href: '/como-funciona' },
    { name: 'Pedido', href: '/pedido' },
    { name: 'Contato', href: '/contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/98701d3a-8524-4c52-8d57-8439df9493b2.png" 
              alt="Victor Clear Vision" 
              className="h-10 md:h-12"
            />
            <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:block">Victor Clear Vision</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === item.href ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/pedido" className="btn-primary text-sm">
              Fazer Pedido
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.href
                  ? 'text-primary bg-gray-50'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-3 py-2">
            <Link to="/pedido" className="btn-primary text-sm w-full block text-center">
              Fazer Pedido
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
