
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram as InstagramIcon, MapPin as MapPinIcon } from 'lucide-react';
import { MessageSquare } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "5561992893006"; // Substitua pelo número real
  const instagramUsername = "victorclear_vision"; // Substitua pelo username real
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e informações */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/98701d3a-8524-4c52-8d57-8439df9493b2.png" 
                alt="Victor Clear Vision" 
                className="h-12 mb-4"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              Lentes de fábrica para o seu óculos com qualidade e agilidade.
            </p>
          </div>
          
          {/* Links rápidos */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tipos-de-lentes" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Tipos de Lentes
                </Link>
              </li>
              <li>
                <Link to="/servicos-extras" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Serviços Extras
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <a 
                  href={`https://instagram.com/${instagramUsername}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  <InstagramIcon className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <Link to="/contato" className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  Localização: a combinar
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Call to action */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Faça seu Pedido</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Escolha suas lentes e envie seu pedido diretamente pelo WhatsApp.
            </p>
            <Link to="/pedido" className="btn-primary">
              Fazer Pedido
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Victor Clear Vision. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/politica-de-privacidade" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
