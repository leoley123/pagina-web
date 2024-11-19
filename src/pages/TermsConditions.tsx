import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import PageHeader from '../components/PageHeader';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Terms and Conditions / Términos y Condiciones"
        description="Please read these terms carefully / Por favor lea estos términos cuidadosamente"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="spanish" className="space-y-8">
          <TabsList className="w-full justify-start bg-white p-1 rounded-lg">
            <TabsTrigger value="spanish" className="flex-1">Español</TabsTrigger>
            <TabsTrigger value="english" className="flex-1">English</TabsTrigger>
          </TabsList>

          <TabsContent value="spanish" className="bg-white p-8 rounded-lg shadow">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">Términos y Condiciones</h2>
              
              <p className="mb-4">Fecha de Vigencia: 15 de marzo de 2024</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Introducción</h3>
              <p>Bienvenido al sitio web y servicios de Tu Ayuda Comercial LLC. Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos y Condiciones.</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Servicios Proporcionados</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Consultoría empresarial</li>
                <li>Intermediación de préstamos SBA</li>
                <li>Préstamos inmobiliarios para inversionistas</li>
                <li>Préstamos para equipos</li>
                <li>Servicios de mensajería de texto</li>
                <li>Marketing y comunicaciones por correo electrónico</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Uso de los Servicios</h3>
              <p>Al utilizar nuestros servicios, usted acepta:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Tener al menos 18 años de edad</li>
                <li>Proporcionar información precisa y actualizada</li>
                <li>Mantener la confidencialidad de su cuenta</li>
                <li>Notificarnos de cualquier uso no autorizado</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Contacto</h3>
              <p>Para preguntas sobre estos términos, contáctenos en:</p>
              <p className="font-bold mt-2">Tu Ayuda Comercial LLC</p>
              <p>455 Douglas Ave, Suite 2655</p>
              <p>Altamonte Springs, FL 32714</p>
              <p>Teléfono: (352) 832-4862</p>
              <p>Correo Electrónico: admin@tuayudacomercial.com</p>

              <p className="font-bold mt-4">LG Business Capital LLC</p>
              <p>455 Douglas Ave, Suite 2655</p>
              <p>Altamonte Springs, FL 32714</p>
              <p>Teléfono: (352) 832-4862</p>
              <p>Correo Electrónico: admin@lgbusinesscapital.com</p>
            </div>
          </TabsContent>

          <TabsContent value="english" className="bg-white p-8 rounded-lg shadow">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">Terms and Conditions</h2>
              
              <p className="mb-4">Effective Date: March 15, 2024</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Introduction</h3>
              <p>Welcome to Tu Ayuda Comercial LLC's website and services. By accessing or using our services, you agree to be bound by these Terms and Conditions.</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Services Provided</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Business consulting</li>
                <li>SBA loan brokerage</li>
                <li>Real estate loans for investors</li>
                <li>Equipment loans</li>
                <li>Text messaging services</li>
                <li>Email marketing and communications</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Use of Services</h3>
              <p>By using our services, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Be at least 18 years of age</li>
                <li>Provide accurate and current information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Notify us of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Contact</h3>
              <p>For questions about these terms, contact us at:</p>
              <p className="font-bold mt-2">Tu Ayuda Comercial LLC</p>
              <p>455 Douglas Ave, Suite 2655</p>
              <p>Altamonte Springs, FL 32714</p>
              <p>Phone: (352) 832-4862</p>
              <p>Email: admin@tuayudacomercial.com</p>

              <p className="font-bold mt-4">LG Business Capital LLC</p>
              <p>455 Douglas Ave, Suite 2655</p>
              <p>Altamonte Springs, FL 32714</p>
              <p>Phone: (352) 832-4862</p>
              <p>Email: admin@lgbusinesscapital.com</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TermsConditions;