
import React, { ReactNode } from 'react';
import CTAButton from '@/components/CTAButton';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  bulletPoints: string[];
  imageSrc: string;
  imageAlt: string;
  imageCredit?: {
    text: string;
    link: string;
  };
  ctaButton?: {
    text: string;
    to: string;
    isSecondary?: boolean;
  };
  imagePosition?: 'left' | 'right';
}

const ProcessStep = ({
  stepNumber,
  title,
  description,
  bulletPoints,
  imageSrc,
  imageAlt,
  imageCredit,
  ctaButton,
  imagePosition = 'right'
}: ProcessStepProps) => {
  const ContentSection = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{stepNumber}. {title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2 text-gray-600 mb-6">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {ctaButton && (
        <CTAButton 
          text={ctaButton.text} 
          to={ctaButton.to} 
          isSecondary={ctaButton.isSecondary}
        />
      )}
    </div>
  );

  const ImageSection = () => (
    <div className="flex flex-col justify-center">
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
      {imageCredit && (
        <p className="text-xs text-gray-500 mt-2 italic">
          {imageCredit.text} <a href={imageCredit.link} className="text-primary hover:underline">freepik</a>
        </p>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
      {imagePosition === 'left' ? (
        <>
          <div className="order-2 md:order-1"><ImageSection /></div>
          <div className="order-1 md:order-2"><ContentSection /></div>
        </>
      ) : (
        <>
          <div><ContentSection /></div>
          <div><ImageSection /></div>
        </>
      )}
    </div>
  );
};

export default ProcessStep;
