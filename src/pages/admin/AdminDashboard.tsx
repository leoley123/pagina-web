import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, PlusCircle } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const AdminDashboard = () => {
  const modules = [
    {
      title: 'Blog Posts',
      description: 'Manage your blog content',
      icon: FileText,
      link: '/admin/blog',
      count: 3,
      actions: [
        { label: 'Create Post', link: '/admin/blog/crear', icon: PlusCircle }
      ]
    },
    {
      title: 'Pages',
      description: 'Create and edit website pages',
      icon: LayoutDashboard,
      link: '/admin/pages',
      count: 5,
      actions: [
        { label: 'Create Page', link: '/admin/pages/crear', icon: PlusCircle }
      ]
    },
    {
      title: 'Settings',
      description: 'Configure website settings',
      icon: Settings,
      link: '/admin/settings',
      count: null,
      actions: []
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Panel de Administración"
        description="Gestiona el contenido y la configuración de tu sitio web"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    {module.count !== null && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {module.count} items
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="space-y-2">
                    <Link
                      to={module.link}
                      className="block w-full text-center bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Ver Todo
                    </Link>
                    {module.actions.map((action, actionIndex) => (
                      <Link
                        key={actionIndex}
                        to={action.link}
                        className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <action.icon className="h-4 w-4 mr-2" />
                        {action.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;