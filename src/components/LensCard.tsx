
import React from 'react';
import { Link } from 'react-router-dom';

interface LensCardProps {
  title: string;
  description: string;
  imageSrc: string;
  to: string;
}

const LensCard: React.FC<LensCardProps> = ({ title, description, imageSrc, to }) => {
  return (
    <div className="card overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
        <Link 
          to={to} 
          className="btn-primary mt-auto self-start"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  );
};

export default LensCard;
