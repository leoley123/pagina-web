import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, DollarSign, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 to-blue-900/95" />
        </div>
        <div className="container relative px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none max-w-4xl mx-auto">
                Obtenga Financiamiento Para Su{" "}
                <span className="text-green-400">Negocio</span>
              </h1>
              <p className="max-w-[800px] text-zinc-200 text-xl md:text-2xl mx-auto leading-relaxed">
                Le ayudamos a encontrar el programa perfecto para su negocio en las etapas de formación y crecimiento. Financiamos sus proyectos de bienes raíces desde $100,000 hasta $500 millones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
              <Link
                to="/prestamos-sba"
                className="bg-green-500 text-white hover:bg-green-400 transition-all duration-300 text-lg px-8 py-3 rounded-lg"
              >
                Precalificación
              </Link>
              <Link
                to="/cita"
                className="bg-white/10 text-white border-white hover:bg-white/20 transition-all duration-300 text-lg px-8 py-3 rounded-lg border"
              >
                Hacer una Cita
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <DollarSign className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Préstamo del SBA</h3>
                <p className="text-zinc-300">
                  Acceda a beneficios como tasas de interés reducidas y términos de pago extendidos.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Building2 className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Bienes Raíces Comerciales</h3>
                <p className="text-zinc-300">
                  Compre, refinancie o renueve propiedades para uso comercial de su negocio.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Crecimiento Empresarial</h3>
                <p className="text-zinc-300">
                  Obtenga capital para expandir su negocio, comprar equipos o aumentar su inventario.
                </p>
              </div>
            </div>

            <div className="pt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white">Asesoría personalizada y gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" 
                alt="SBA Loans"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Préstamos SBA</h3>
              <p className="text-gray-600 mb-4">
                Financiamiento respaldado por el gobierno para impulsar tu negocio
              </p>
              <Link to="/prestamos-sba" className="text-blue-600 flex items-center hover:text-blue-700">
                Más información <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                alt="Real Estate"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Bienes Raíces</h3>
              <p className="text-gray-600 mb-4">
                Encuentra la propiedad perfecta para tu negocio
              </p>
              <Link to="/bienes-raices" className="text-blue-600 flex items-center hover:text-blue-700">
                Más información <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="Consulting"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Consultoría</h3>
              <p className="text-gray-600 mb-4">
                Asesoramiento experto para el crecimiento de tu empresa
              </p>
              <Link to="/contactenos" className="text-blue-600 flex items-center hover:text-blue-700">
                Más información <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-blue-600 text-white py-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
            alt="Business Growth"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Empezar?</h2>
          <p className="text-xl mb-8">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <Link
            to="/cita"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Agendar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;