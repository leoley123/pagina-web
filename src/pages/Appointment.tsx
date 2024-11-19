import React from 'react';
import PageHeader from '../components/PageHeader';
import { useEffect } from 'react';

const Appointment = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <PageHeader
        title="Agendar Cita"
        description="Programa una consulta con nuestros expertos"
        imageSrc="https://images.unsplash.com/photo-1459499362902-55a20553e082?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/lgbusinesscapital" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;