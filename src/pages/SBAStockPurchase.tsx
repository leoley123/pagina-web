import React from 'react';
import PageHeader from '../components/PageHeader';
import SBANavigation from '../components/SBANavigation';
import { Users, DollarSign, CheckCircle, ArrowRight, FileText, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const SBAStockPurchase = () => {
  const requirements = [
    'Valoración profesional de las acciones',
    'Plan de transición detallado',
    'Historial crediticio sólido',
    'Capital inicial disponible',
    'Estados financieros actualizados',
    'Acuerdo entre accionistas'
  ];

  const benefits = [
    'Financiamiento hasta 90% del valor',
    'Términos flexibles de pago',
    'Tasas competitivas',
    'Preservación del capital',
    'Proceso simplificado',
    'Soporte post-transacción'
  ];

  return (
    <div>
      <PageHeader
        title="Préstamos SBA para Compra de Acciones"
        description="Financiamiento especializado para buyouts y compra de participaciones"
        imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
      />

      <SBANavigation currentPage="Compra de Acciones" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Links */}
        <div className="mb-8">
          <Link 
            to="/prestamos-sba"
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            Volver a Préstamos SBA
          </Link>
        </div>

        {/* Requirements and Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              Requisitos
            </h2>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              Beneficios
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8">Proceso de Compra de Acciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Evaluación',
                description: 'Análisis inicial de la transacción propuesta'
              },
              {
                title: 'Valoración',
                description: 'Determinación del valor justo de mercado'
              },
              {
                title: 'Estructuración',
                description: 'Diseño del plan de financiamiento'
              },
              {
                title: 'Ejecución',
                description: 'Cierre de la transacción y transferencia'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Interesado en un Buyout?</h2>
          <p className="text-gray-600 mb-8">
            Permítanos ayudarle a estructurar la transacción de manera óptima
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/cita"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contactenos"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBAStockPurchase;