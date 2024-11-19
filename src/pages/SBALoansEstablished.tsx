import React from 'react';
import PageHeader from '../components/PageHeader';
import { DollarSign, CheckCircle, AlertCircle, ArrowRight, Building2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const SBALoansEstablished = () => {
  const requirements = [
    '2+ años de operación comercial',
    'Historial de flujo de caja positivo',
    'Buen historial crediticio comercial',
    'Estados financieros completos',
    'Declaraciones de impuestos comerciales',
    'Plan de negocios actualizado'
  ];

  const benefits = [
    'Montos más altos de financiamiento',
    'Tasas de interés preferenciales',
    'Plazos más flexibles',
    'Menos requisitos de colateral',
    'Proceso de aprobación más rápido',
    'Múltiples opciones de uso de fondos'
  ];

  const loanTypes = [
    {
      title: 'SBA 7(a) Standard',
      description: 'Préstamo flexible para capital de trabajo y expansión',
      amount: 'Hasta $5,000,000',
      terms: 'Hasta 25 años',
      icon: DollarSign,
      features: [
        'Tasa de interés competitiva',
        'Uso flexible de fondos',
        'Sin penalidad por pago anticipado',
        'Garantía parcial de la SBA'
      ]
    },
    {
      title: 'SBA 504',
      description: 'Ideal para compra de bienes raíces o equipos',
      amount: 'Hasta $5,500,000',
      terms: 'Hasta 25 años para bienes raíces',
      icon: Building2,
      features: [
        'Tasa fija a largo plazo',
        'Pago inicial bajo',
        'Financiamiento hasta 90%',
        'Preserva capital de trabajo'
      ]
    }
  ];

  return (
    <div>
      <PageHeader
        title="Préstamos SBA para Negocios Establecidos"
        description="Soluciones de financiamiento especializadas para empresas con más de 2 años de operación"
        imageSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80"
      />

      {/* Quick Links */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center space-x-8">
            <Link 
              to="/prestamos-sba/nuevos-negocios"
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              Ver opciones para nuevos negocios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Requirements and Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-2" />
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

        {/* Loan Types */}
        <h2 className="text-3xl font-bold text-center mb-12">Tipos de Préstamos Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {loanTypes.map((loan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <loan.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{loan.title}</h3>
                  <p className="text-gray-600">{loan.description}</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Monto Máximo:</span>
                  <span className="font-semibold">{loan.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Plazo:</span>
                  <span className="font-semibold">{loan.terms}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {loan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para Comenzar?</h2>
          <p className="text-gray-600 mb-8">
            Nuestro equipo de expertos está listo para ayudarte a obtener el financiamiento que necesitas
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/cita"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Solicitar Evaluación Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contactenos"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Hablar con un Asesor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBALoansEstablished;