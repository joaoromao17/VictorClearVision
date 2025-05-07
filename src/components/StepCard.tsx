
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, stepNumber }) => {
  return (
    <div className="card p-6 flex flex-col items-center text-center h-full animate-fade-in">
      <div className="rounded-full bg-primary/10 p-4 mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
        {stepNumber}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default StepCard;
