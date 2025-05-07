
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to: string;
  isSecondary?: boolean;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, to, isSecondary = false, className = '' }) => {
  return (
    <Link 
      to={to} 
      className={`${isSecondary ? 'btn-secondary' : 'btn-primary'} ${className}`}
    >
      {text}
    </Link>
  );
};

export default CTAButton;
