import React from 'react';
import PageHeader from '../components/PageHeader';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['(352) 931-8308']
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      details: ['admin@tuayudacomercial.com']
    },
    {
      icon: Clock,
      title: 'Horario',
      details: ['Lunes - Viernes: 9:00 AM - 5:00 PM']
    }
  ];

  return (
    <div>
      <PageHeader
        title="Contáctenos"
        description="Estamos aquí para ayudarte con todas tus necesidades comerciales"
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Información de Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-4 font-semibold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, dIndex) => (
                      <p key={dIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Envíenos un Mensaje</h2>
            <iframe
              id="JotFormIFrame-243178365605158"
              title="Forma de Contacto"
              src="https://form.jotform.com/243178365605158"
              style={{ width: '100%', height: '539px', border: 'none' }}
            />
            <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;