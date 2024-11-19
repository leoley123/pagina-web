import React, { useState } from 'react';
import CustomEditor from './CustomEditor';
import ComponentPicker from './ComponentPicker';
import { Button } from '../ui/button';
import { PlusCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

interface PageEditorProps {
  initialContent?: string;
  onChange: (content: { html: string; components: any[] }) => void;
}

const PageEditor: React.FC<PageEditorProps> = ({ initialContent = '', onChange }) => {
  const [content, setContent] = useState(initialContent);
  const [components, setComponents] = useState<any[]>([]);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    onChange({ html: newContent, components });
  };

  const handleAddComponent = (componentType: string) => {
    const newComponent = {
      id: `component-${Date.now()}`,
      type: componentType,
      props: getDefaultPropsForComponent(componentType)
    };

    setComponents([...components, newComponent]);
    onChange({ html: content, components: [...components, newComponent] });
  };

  const getDefaultPropsForComponent = (type: string) => {
    switch (type) {
      case 'hero':
        return {
          title: 'Título Principal',
          description: 'Descripción de la sección',
          image: '',
          buttonText: 'Llamada a la acción',
          buttonLink: '/'
        };
      case 'features':
        return {
          title: 'Nuestras Características',
          items: [
            { title: 'Característica 1', description: 'Descripción 1' },
            { title: 'Característica 2', description: 'Descripción 2' },
            { title: 'Característica 3', description: 'Descripción 3' }
          ]
        };
      // Add more default props for other component types
      default:
        return {};
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <PlusCircle className="h-4 w-4 mr-2" />
              Agregar Componente
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Seleccionar Componente</DialogTitle>
            </DialogHeader>
            <ComponentPicker onSelect={handleAddComponent} />
          </DialogContent>
        </Dialog>
      </div>

      {components.map((component, index) => (
        <div key={component.id} className="mb-4 p-4 border rounded-lg bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-700">
              Componente: {component.type}
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const newComponents = [...components];
                newComponents.splice(index, 1);
                setComponents(newComponents);
                onChange({ html: content, components: newComponents });
              }}
            >
              Eliminar
            </Button>
          </div>
          {/* Component preview would go here */}
          <div className="bg-white p-4 rounded border">
            <pre className="text-xs">{JSON.stringify(component.props, null, 2)}</pre>
          </div>
        </div>
      ))}

      <CustomEditor
        initialValue={content}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default PageEditor;