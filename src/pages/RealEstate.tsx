import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, DollarSign, Users, ArrowRight, CheckCircle, MapPin, Clock, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TestimonialCard from '../components/TestimonialCard';

const RealEstate = () => {
  const services = [
    {
      title: 'Construcción Residencial',
      description: 'Financiamiento para construcción de viviendas unifamiliares nuevas',
      link: '/bienes-raices/prestamos-construccion',
      linkText: 'Ver Guía de Préstamos de Construcción',
      icon: Building2
    },
    {
      title: 'Refinanciamiento',
      description: 'Mejores términos para tus propiedades existentes',
      icon: DollarSign
    },
    {
      title: 'Desarrollo de Proyectos',
      description: 'Financiamiento para construcción y desarrollo',
      icon: MapPin
    },
    {
      title: 'Consultoría Inmobiliaria',
      description: 'Asesoría experta en bienes raíces comerciales',
      icon: Users
    }
  ];

  const propertyTypes = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      title: 'Edificios de Oficinas',
      features: ['Espacios modernos', 'Ubicaciones prime', 'Infraestructura completa']
    },
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
      title: 'Locales Comerciales',
      features: ['Alto tráfico peatonal', 'Visibilidad comercial', 'Diseños adaptables']
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      title: 'Espacios Industriales',
      features: ['Amplias instalaciones', 'Acceso logístico', 'Infraestructura industrial']
    }
  ];

  const process = [
    {
      icon: FileText,
      title: 'Evaluación Inicial',
      description: 'Analizamos tus necesidades y objetivos comerciales'
    },
    {
      icon: Users,
      title: 'Asesoría Personalizada',
      description: 'Desarrollamos la mejor estrategia de financiamiento'
    },
    {
      icon: Clock,
      title: 'Proceso Eficiente',
      description: 'Gestionamos tu solicitud de manera ágil'
    },
    {
      icon: DollarSign,
      title: 'Financiamiento',
      description: 'Obtienes los fondos necesarios para tu proyecto'
    }
  ];

  const testimonials = [
    {
      name: 'Roberto Méndez',
      business: 'Grupo Comercial RM',
      quote: 'Gracias a Tu Ayuda Comercial pudimos expandir nuestro negocio con la adquisición de un nuevo local comercial. El proceso fue muy profesional y eficiente.'
    },
    {
      name: 'Ana Torres',
      business: 'Distribuidora Industrial AT',
      quote: 'El equipo nos ayudó a encontrar y financiar el espacio industrial perfecto para nuestras operaciones. Su asesoría fue fundamental para nuestro crecimiento.'
    },
    {
      name: 'Carlos Jiménez',
      business: 'Restaurante El Sabor Latino',
      quote: 'Obtuvimos un préstamo SBA para expandir nuestro restaurante. El equipo nos guió en cada paso del proceso y ahora tenemos tres ubicaciones exitosas.'
    },
    {
      name: 'María Rodríguez',
      business: 'Servicios de Limpieza MR',
      quote: 'Con el préstamo SBA pudimos comprar equipo nuevo y contratar más personal. La asesoría que recibimos fue invaluable para nuestro crecimiento.'
    }
  ];

  return (
    <div>
      <PageHeader
        title="Bienes Raíces Comerciales"
        description="Soluciones de financiamiento para propiedades comerciales que impulsan tu negocio"
        imageSrc="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80"
      />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.link && (
                  <Link to={service.link} className="text-blue-600 flex items-center hover:text-blue-700">
                    {service.linkText} <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Propiedades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{property.title}</h3>
                  <ul className="space-y-2">
                    {property.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Proceso Simplificado</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                business={testimonial.business}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Empezar?</h2>
          <p className="text-xl mb-8">
            Permítenos ayudarte a encontrar la mejor solución de financiamiento para tu propiedad comercial
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/cita"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              Agenda una Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contactenos"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;