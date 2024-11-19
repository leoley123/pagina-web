import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  business: string;
  quote: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, business, quote, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative hover-lift">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary-200 animate-fade-in" />
      <div className="flex items-center mb-4">
        {image ? (
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4 animate-scale-in" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 animate-scale-in">
            <span className="text-primary-600 text-lg font-semibold">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div className="animate-slide-in-right">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{business}</p>
        </div>
      </div>
      <p className="text-gray-700 italic animate-fade-in">{quote}</p>
    </div>
  );
};

export default TestimonialCard;