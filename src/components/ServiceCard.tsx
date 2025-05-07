
import React from 'react';

interface ImageCreditProps {
  text: string;
  link?: string;
}

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  imageCredit?: ImageCreditProps;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, imageCredit }) => {
  return (
    <div className="card p-6 flex flex-col items-center text-center h-full animate-fade-in">
      <div className="rounded-lg overflow-hidden mb-2 w-full h-48 relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {imageCredit && (
        <div className="w-full text-xs text-gray-500 mb-3 text-right italic">
          {imageCredit.link ? (
            <a 
              href={imageCredit.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary hover:underline"
            >
              {imageCredit.text}
            </a>
          ) : (
            <span>{imageCredit.text}</span>
          )}
        </div>
      )}
      
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
