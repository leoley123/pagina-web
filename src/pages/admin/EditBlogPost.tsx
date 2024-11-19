import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import CustomEditor from '../../components/editor/CustomEditor';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Save, Image as ImageIcon, AlertCircle } from 'lucide-react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import { blogPosts } from '../../data/blogPosts';

const EditBlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState({
    title: '',
    excerpt: '',
    category: '',
    image: '',
    content: ''
  });

  useEffect(() => {
    const existingPost = blogPosts.find(post => post.id === id);
    if (existingPost) {
      setPost({
        title: existingPost.title,
        excerpt: existingPost.excerpt,
        category: existingPost.category,
        image: existingPost.image,
        content: existingPost.content
      });
      setLoading(false);
    } else {
      setError('Post no encontrado');
      setLoading(false);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would update the post in your backend
    console.log('Updated post:', { id, ...post });
    navigate('/blog');
  };

  const handleEditorChange = (content: string) => {
    setPost(prev => ({ ...prev, content }));
  };

  const handleImageSelect = (url: string) => {
    setPost(prev => ({ ...prev, image: url }));
    setShowGallery(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-600 mx-auto" />
          <p className="mt-4 text-gray-600">{error}</p>
          <Button
            onClick={() => navigate('/blog')}
            className="mt-4"
          >
            Volver al Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Editar Publicación"
        description="Actualiza el contenido de tu publicación"
        imageSrc="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 bg-white p-6 rounded-lg shadow-lg">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={post.title}
                onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Ingrese el título del artículo"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Resumen</Label>
              <Input
                id="excerpt"
                value={post.excerpt}
                onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Breve descripción del artículo"
                className="mt-1"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="category">Categoría</Label>
                <select
                  id="category"
                  value={post.category}
                  onChange={(e) => setPost(prev => ({ ...prev, category: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="Financiamiento">Financiamiento</option>
                  <option value="Bienes Raíces">Bienes Raíces</option>
                  <option value="Consultoría">Consultoría</option>
                  <option value="Emprendimiento">Emprendimiento</option>
                </select>
              </div>

              <div>
                <Label htmlFor="image">Imagen Destacada</Label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <Input
                    id="image"
                    value={post.image}
                    onChange={(e) => setPost(prev => ({ ...prev, image: e.target.value }))}
                    placeholder="URL de la imagen"
                    className="rounded-none rounded-l-md"
                  />
                  <Button
                    type="button"
                    onClick={() => setShowGallery(true)}
                    className="rounded-none rounded-r-md"
                  >
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {post.image && (
              <div className="relative">
                <img
                  src={post.image}
                  alt="Vista previa"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            <div>
              <Label>Contenido</Label>
              <div className="mt-1">
                <CustomEditor
                  initialValue={post.content}
                  onChange={handleEditorChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/blog')}
            >
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Guardar Cambios
            </Button>
          </div>
        </form>
      </div>

      {showGallery && (
        <ImageGallery
          onSelect={handleImageSelect}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
};

export default EditBlogPost;