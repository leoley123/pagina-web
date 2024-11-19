import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Menu, 
  X, 
  Globe,
  Users,
  BarChart,
  MessageSquare,
  Calendar,
  LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';
import Logo from '../Logo';
import { useAuth } from '../../contexts/AuthContext';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      name: 'Páginas',
      href: '/admin/pages',
      icon: FileText,
    },
    {
      name: 'Blog',
      href: '/blog/crear',
      icon: Globe,
    },
    {
      name: 'Usuarios',
      href: '/admin/users',
      icon: Users,
    },
    {
      name: 'Analíticas',
      href: '/admin/analytics',
      icon: BarChart,
    },
    {
      name: 'Mensajes',
      href: '/admin/messages',
      icon: MessageSquare,
      badge: '3'
    },
    {
      name: 'Citas',
      href: '/admin/appointments',
      icon: Calendar,
      badge: '5'
    },
    {
      name: 'Configuración',
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  const isActive = (path: string) => {
    if (path === '/admin' && location.pathname === '/admin') {
      return true;
    }
    return location.pathname.startsWith(path) && path !== '/admin';
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out",
          !isSidebarOpen && "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <Link to="/admin" className="flex items-center">
              <Logo className="scale-90" />
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-lg",
                    isActive(item.href)
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <item.icon className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    isActive(item.href)
                      ? "text-primary-600"
                      : "text-gray-400 group-hover:text-gray-500"
                  )} />
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto bg-primary-100 text-primary-600 py-0.5 px-2 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* User Menu */}
          <div className="border-t p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">
                    {user?.email?.[0].toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">
                  {user?.email}
                </p>
                <p className="text-xs text-gray-500">Administrador</p>
              </div>
              <button
                onClick={handleSignOut}
                className="ml-auto p-1 text-gray-400 hover:text-gray-500"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed z-50 bottom-4 right-4 p-3 rounded-full bg-primary-600 text-white shadow-lg lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}

      {/* Main Content */}
      <div className={cn(
        "transition-margin duration-200 ease-in-out",
        isSidebarOpen ? "lg:ml-64" : "ml-0"
      )}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;