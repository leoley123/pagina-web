import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import PageEditor from '../../components/editor/PageEditor';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Save, Globe } from 'lucide-react';

const PageBuilder = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState({
    title: '',
    slug: '',
    content: {
      html: '',
      components: []
    },
    seo: {
      metaTitle: '',
      metaDescription: '',
      ogImage: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save the page to your backend
    console.log('Page data:', page);
    navigate('/admin/pages');
  };

  const handleEditorChange = (content: { html: string; components: any[] }) => {
    setPage(prev => ({
      ...prev,
      content
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Constructor de Páginas"
        description="Crea y personaliza páginas de forma visual"
        imageSrc="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title">Título de la Página</Label>
                <Input
                  id="title"
                  value={page.title}
                  onChange={e => setPage(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Ingrese el título"
                  required
                />
              </div>
              <div>
                <Label htmlFor="slug">URL Amigable</Label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">/</span>
                  <Input
                    id="slug"
                    value={page.slug}
                    onChange={e => setPage(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="url-amigable"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Page Editor */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <PageEditor
              initialContent={page.content.html}
              onChange={handleEditorChange}
            />
          </div>

          {/* SEO Settings */}
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 mr-2 text-gray-500" />
              <h3 className="text-lg font-semibold">SEO y Metadatos</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="metaTitle">Título Meta</Label>
                <Input
                  id="metaTitle"
                  value={page.seo.metaTitle}
                  onChange={e => setPage(prev => ({
                    ...prev,
                    seo: { ...prev.seo, metaTitle: e.target.value }
                  }))}
                  placeholder="Título para motores de búsqueda"
                />
              </div>
              <div>
                <Label htmlFor="metaDescription">Descripción Meta</Label>
                <textarea
                  id="metaDescription"
                  value={page.seo.metaDescription}
                  onChange={e => setPage(prev => ({
                    ...prev,
                    seo: { ...prev.seo, metaDescription: e.target.value }
                  }))}
                  placeholder="Descripción para motores de búsqueda"
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="ogImage">Imagen Social (OG Image)</Label>
                <Input
                  id="ogImage"
                  value={page.seo.ogImage}
                  onChange={e => setPage(prev => ({
                    ...prev,
                    seo: { ...prev.seo, ogImage: e.target.value }
                  }))}
                  placeholder="URL de la imagen para redes sociales"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/pages')}
            >
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Guardar Página
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageBuilder;