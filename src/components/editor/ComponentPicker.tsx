import React from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import {
  LayoutGrid,
  Image,
  FileText,
  ListTodo,
  MessageCircle,
  Mail,
  Calendar,
  Map,
  Calculator,
  BarChart,
  Users
} from 'lucide-react';

interface ComponentPickerProps {
  onSelect: (componentType: string) => void;
}

const ComponentPicker: React.FC<ComponentPickerProps> = ({ onSelect }) => {
  const components = [
    {
      type: 'hero',
      icon: LayoutGrid,
      name: 'Hero Section',
      description: 'Sección principal con imagen y texto'
    },
    {
      type: 'imageGallery',
      icon: Image,
      name: 'Galería de Imágenes',
      description: 'Colección de imágenes en grid'
    },
    {
      type: 'testimonials',
      icon: MessageCircle,
      name: 'Testimonios',
      description: 'Carrusel de testimonios de clientes'
    },
    {
      type: 'contactForm',
      icon: Mail,
      name: 'Formulario de Contacto',
      description: 'Formulario interactivo de contacto'
    },
    {
      type: 'features',
      icon: ListTodo,
      name: 'Características',
      description: 'Grid de características o servicios'
    },
    {
      type: 'calculator',
      icon: Calculator,
      name: 'Calculadora',
      description: 'Calculadora de préstamos interactiva'
    },
    {
      type: 'stats',
      icon: BarChart,
      name: 'Estadísticas',
      description: 'Sección de estadísticas y números'
    },
    {
      type: 'team',
      icon: Users,
      name: 'Equipo',
      description: 'Grid de miembros del equipo'
    },
    {
      type: 'map',
      icon: Map,
      name: 'Mapa',
      description: 'Mapa interactivo de ubicación'
    },
    {
      type: 'appointment',
      icon: Calendar,
      name: 'Calendario',
      description: 'Programador de citas'
    }
  ];

  return (
    <ScrollArea className="h-[400px]">
      <div className="grid grid-cols-2 gap-4 p-4">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <Button
              key={component.type}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center text-center"
              onClick={() => onSelect(component.type)}
            >
              <Icon className="h-8 w-8 mb-2" />
              <span className="font-medium mb-1">{component.name}</span>
              <span className="text-xs text-gray-500">{component.description}</span>
            </Button>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default ComponentPicker;