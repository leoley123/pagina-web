import React, { useState, useEffect } from 'react';
import { getOptimizedImageUrl } from '../utils/imageUtils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg';
  fallback?: string;
  onError?: () => void;
}

const Image: React.FC<ImageProps> = ({
  src,
  width,
  height,
  quality = 80,
  format = 'auto',
  fallback = '',
  onError,
  alt = '',
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (src) {
      const optimizedUrl = getOptimizedImageUrl(src, { width, height, quality, format });
      setImgSrc(optimizedUrl);
      setError(false);
    }
  }, [src, width, height, quality, format]);

  const handleError = () => {
    if (!error) {
      setError(true);
      setImgSrc(fallback);
      onError?.();
    }
  };

  return (
    <img
      src={imgSrc || fallback}
      alt={alt}
      onError={handleError}
      className={className}
      {...props}
    />
  );
};

export default Image;