import React from 'react';
import PageHeader from '../components/PageHeader';
import SBANavigation from '../components/SBANavigation';
import { Users, DollarSign, CheckCircle, ArrowRight, FileText, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const SBABusinessPurchase = () => {
  const requirements = [
    'Plan de negocios detallado',
    'Experiencia en la industria',
    'Historial crediticio sólido',
    'Capital inicial disponible',
    'Estados financieros del negocio objetivo',
    'Valoración profesional del negocio'
  ];

  const benefits = [
    'Financiamiento hasta 90% del valor',
    'Términos de pago extendidos',
    'Tasas de interés competitivas',
    'Incluye capital de trabajo',
    'Asistencia en la transición',
    'Soporte post-adquisición'
  ];

  return (
    <div>
      <PageHeader
        title="Préstamos SBA para Compra de Negocios"
        description="Financiamiento especializado para la adquisición de negocios existentes"
        imageSrc="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80"
      />

      <SBANavigation currentPage="Compra de Negocios" />

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
              <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
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
          <h2 className="text-2xl font-bold mb-8">Proceso de Adquisición</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Evaluación Inicial',
                description: 'Análisis detallado del negocio objetivo y su potencial'
              },
              {
                title: 'Due Diligence',
                description: 'Revisión exhaustiva de documentos y operaciones'
              },
              {
                title: 'Estructuración',
                description: 'Diseño del plan de financiamiento y términos'
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
          <h2 className="text-2xl font-bold mb-4">¿Listo para Adquirir un Negocio?</h2>
          <p className="text-gray-600 mb-8">
            Nuestro equipo de expertos está listo para guiarte en el proceso de adquisición
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

export default SBABusinessPurchase;