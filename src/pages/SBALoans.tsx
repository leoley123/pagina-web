import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Building2, Users, ArrowRight, CheckCircle, FileText, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const SBALoans = () => {
  const loanTypes = [
    {
      title: 'Préstamos de Cash-Flow (2+ años)',
      description: 'Para negocios establecidos',
      icon: DollarSign,
      options: [
        'Negocios con más de 2 años',
        'Montos hasta $500,000',
        'Términos flexibles hasta 10 años',
        'Tasas competitivas'
      ],
      link: '/prestamos-sba/guia-cashflow'
    },
    {
      title: 'Préstamos de Cash-Flow (Nuevos)',
      description: 'Para negocios con menos de 2 años',
      icon: DollarSign,
      options: [
        'Negocios con 2-24 meses',
        'Montos hasta $150,000',
        'Términos ajustados al negocio',
        'Soporte especializado'
      ],
      link: '/prestamos-sba/guia-microloan'
    },
    {
      title: 'Compra de Negocios',
      description: 'Adquiera un negocio existente',
      icon: Building2,
      options: [
        'Financiamiento hasta 90%',
        'Términos hasta 25 años',
        'Tasas competitivas',
        'Incluye capital de trabajo'
      ],
      link: '/prestamos-sba/compra-negocios'
    },
    {
      title: 'Compra de Acciones',
      description: 'Para buyouts de socios',
      icon: Users,
      options: [
        'Estructura flexible',
        'Preserva capital',
        'Proceso simplificado',
        'Soporte completo'
      ],
      link: '/prestamos-sba/compra-acciones'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Rest of the component remains the same until the loanTypes mapping */}
      <PageHeader
        title="Préstamos SBA"
        description="Soluciones de financiamiento respaldadas por la SBA para impulsar su negocio"
        imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
      />

      {/* Video Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Conozca Más Sobre los Préstamos SBA</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra cómo los préstamos SBA pueden ayudar a financiar el crecimiento de su negocio
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              className="w-full h-[500px] rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/OlY0W98Qot0"
              title="SBA Loan Information"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Loan Types Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Tipos de Préstamos SBA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <type.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3 mb-8">
                    {type.options.map((option, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{option}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={type.link}
                    className="text-blue-600 hover:text-blue-700 flex items-center font-medium"
                  >
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Proceso Simplificado</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: 'Evaluación Inicial',
                description: 'Analizamos sus necesidades y objetivos comerciales'
              },
              {
                icon: CheckCircle,
                title: 'Pre-Aprobación',
                description: 'Verificación rápida de elegibilidad inicial'
              },
              {
                icon: Clock,
                title: 'Procesamiento',
                description: 'Gestión eficiente de su solicitud'
              },
              {
                icon: DollarSign,
                title: 'Financiamiento',
                description: 'Cierre rápido y desembolso de fondos'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Comenzar?</h2>
          <p className="text-xl mb-8">
            Permítanos ayudarle a encontrar el préstamo SBA perfecto para su negocio
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/cita"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contactenos"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
            >
              Contactar un Asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBALoans;