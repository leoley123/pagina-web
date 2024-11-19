import React, { useState } from 'react';
import { X, Search, Upload, ExternalLink } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Label } from '../ui/label';
import Image from '../Image';
import { validateImageUrl } from '../../utils/imageUtils';

interface ImageData {
  url: string;
  title: string;
  category: string;
}

interface ImageGalleryProps {
  onSelect: (url: string) => void;
  onClose: () => void;
}

const defaultImages: ImageData[] = [
  {
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
    title: 'Business Finance',
    category: 'Finance'
  },
  {
    url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    title: 'Office Meeting',
    category: 'Business'
  },
  {
    url: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5',
    title: 'Investment Growth',
    category: 'Finance'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    title: 'Commercial Building',
    category: 'Real Estate'
  },
  {
    url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
    title: 'Business Strategy',
    category: 'Business'
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7',
    title: 'Team Success',
    category: 'Business'
  }
];

const ImageGallery: React.FC<ImageGalleryProps> = ({ onSelect, onClose }) => {
  const [images] = useState<ImageData[]>(defaultImages);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [customUrl, setCustomUrl] = useState('');
  const [urlError, setUrlError] = useState('');

  const categories = ['all', ...new Set(images.map(img => img.category))];

  const filteredImages = images.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleImageSelect = (url: string) => {
    onSelect(url);
    onClose();
  };

  const handleCustomUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUrlError('');

    if (!customUrl) {
      setUrlError('Por favor ingrese una URL');
      return;
    }

    try {
      const isValid = await validateImageUrl(customUrl);
      if (isValid) {
        handleImageSelect(customUrl);
      } else {
        setUrlError('La URL no corresponde a una imagen válida');
      }
    } catch {
      setUrlError('Error al validar la imagen. Por favor verifique la URL');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Galería de Imágenes</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 border-b space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar imágenes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <form onSubmit={handleCustomUrlSubmit} className="space-y-2">
            <Label htmlFor="customUrl">URL Externa</Label>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="customUrl"
                  type="url"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={customUrl}
                  onChange={(e) => {
                    setCustomUrl(e.target.value);
                    setUrlError('');
                  }}
                  className="pl-10"
                />
              </div>
              <Button type="submit" disabled={!customUrl}>
                <Upload className="h-4 w-4 mr-2" />
                Usar URL
              </Button>
            </div>
            {urlError && (
              <p className="text-sm text-red-600">{urlError}</p>
            )}
          </form>
        </div>

        <ScrollArea className="p-4 h-[500px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageSelect(image.url)}
                className="group relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-end">
                  <div className="p-2 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium truncate">{image.title}</p>
                    <p className="text-xs opacity-75">{image.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ImageGallery;