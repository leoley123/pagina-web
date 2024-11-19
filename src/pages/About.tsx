import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div>
      <PageHeader
        title="Acerca de Nosotros"
        description="Conoce a nuestro equipo de expertos en financiamiento comercial"
      />
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-full max-w-5xl">
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 p-4 flex flex-col items-center justify-center bg-gray-50">
                      <div className="relative w-64 h-64 mb-4">
                        <img
                          src="https://storage.googleapis.com/cdn-leoley/Leonel-Garcia.jpg"
                          alt="Leonel Garcia"
                          className="rounded-lg w-full h-full object-cover shadow-lg"
                        />
                      </div>
                      <div className="w-full bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-xl font-bold text-white text-center">
                          Leonel Garcia
                        </h2>
                        <p className="text-gray-300 text-center text-sm">
                          MSA, MBA, MIT
                        </p>
                      </div>
                    </div>
                    <div className="lg:w-2/3 p-8 space-y-6">
                      <div className="flex items-center space-x-4 text-gray-600">
                        <Briefcase className="w-6 h-6 text-blue-600" />
                        <span className="text-lg font-semibold">Presidente de LG Business Capital LLC y Tu Ayuda Comercial LLC</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Leonel Garcia lidera compañías dedicadas a ofrecer soluciones de financiamiento a empresas, abarcando desde préstamos SBA hasta financiamiento inmobiliario y la compra de equipos comerciales. Bajo su liderazgo, estas empresas han ayudado a numerosos negocios a acceder al capital necesario para crecer y prosperar.
                      </p>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                        <span className="text-lg font-semibold">Experiencia Académica</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Entre 2014 y 2020, Leonel impartió clases de contabilidad y gestión empresarial en la Universidad Ana G. Méndez y Valencia College en Orlando, FL. Formó a estudiantes a nivel de bachillerato y maestría, preparando futuros líderes en gestión financiera y organizacional.
                      </p>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <Award className="w-6 h-6 text-blue-600" />
                        <span className="text-lg font-semibold">Formación Académica</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li>Maestría en Ciencias de la Contabilidad (2014)</li>
                        <li>Maestría en Administración de Empresas (2006)</li>
                        <li>Maestría en Sistemas de Información (2003)</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        Con más de una década de experiencia en consultoría de negocios, contabilidad y docencia universitaria, Leonel ha trabajado con empresas de diversos sectores, optimizando sus estructuras financieras y fortaleciendo sus operaciones. Su enfoque estratégico y personalizado prioriza relaciones a largo plazo y soluciones adaptadas a las necesidades particulares de cada negocio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;