import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const [imageError, setImageError] = useState(false);
  const logoUrl = 'https://storage.googleapis.com/cdn-leoley/Logo1.png';

  return (
    <div className={`flex items-center ${className}`}>
      {!imageError ? (
        <img 
          src={logoUrl}
          alt="Tu Ayuda Comercial" 
          className="h-12 w-auto"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex items-center gap-2">
          <Building2 className={`h-8 w-8 ${variant === 'light' ? 'text-white' : 'text-primary-600'}`} />
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className={`text-2xl font-bold ${variant === 'light' ? 'text-white' : 'text-primary-600'}`}>Tu</span>
              <span className={`text-2xl font-light ${variant === 'light' ? 'text-gray-100' : 'text-secondary-700'}`}>Ayuda</span>
            </div>
            <span className={`text-sm ${variant === 'light' ? 'text-gray-200' : 'text-secondary-600'}`}>Comercial</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;