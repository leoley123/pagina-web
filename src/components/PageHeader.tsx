import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  imageSrc
}) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0">
        {imageSrc && (
          <>
            <img 
              src={imageSrc}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/90" />
          </>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 animate-slide-up">{title}</h1>
          <p className="text-xl text-blue-100 animate-slide-up delay-100">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;