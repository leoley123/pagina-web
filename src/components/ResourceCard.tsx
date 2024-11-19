import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon: Icon, title, description, link }) => {
  return (
    <a 
      href={link}
      className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary-100 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-primary-600 font-medium">
        Descargar <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </a>
  );
};

export default ResourceCard;