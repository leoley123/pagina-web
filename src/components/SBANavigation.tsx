import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface SBANavigationProps {
  currentPage: string;
}

const SBANavigation: React.FC<SBANavigationProps> = ({ currentPage }) => {
  const location = useLocation();

  const programs = [
    {
      title: 'Cash Flow',
      path: '/prestamos-sba/guia-cashflow',
      description: 'Para negocios establecidos'
    },
    {
      title: 'Micro Loan',
      path: '/prestamos-sba/guia-microloan',
      description: 'Para negocios nuevos'
    },
    {
      title: 'Compra de Negocios',
      path: '/prestamos-sba/compra-negocios',
      description: 'Adquisición de empresas'
    },
    {
      title: 'Compra de Acciones',
      path: '/prestamos-sba/compra-acciones',
      description: 'Buyouts y participaciones'
    }
  ];

  return (
    <div className="bg-white border-b">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                <Home className="h-4 w-4" />
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <Link to="/prestamos-sba" className="ml-2 text-gray-500 hover:text-gray-700">
                  Préstamos SBA
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="ml-2 text-gray-900 font-medium">
                  {currentPage}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Program Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex flex-wrap gap-4">
          {programs.map((program) => (
            <Link
              key={program.path}
              to={program.path}
              className={`flex flex-col px-4 py-2 rounded-lg transition-colors ${
                location.pathname === program.path
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              <span className="font-medium">{program.title}</span>
              <span className="text-sm text-gray-500">{program.description}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SBANavigation;