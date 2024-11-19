import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import PageHeader from '../components/PageHeader';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Privacy Policy / Política de Privacidad"
        description="Our commitment to protecting your privacy / Nuestro compromiso con la protección de su privacidad"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="spanish" className="space-y-8">
          <TabsList className="w-full justify-start bg-white p-1 rounded-lg">
            <TabsTrigger value="spanish" className="flex-1">Español</TabsTrigger>
            <TabsTrigger value="english" className="flex-1">English</TabsTrigger>
          </TabsList>

          <TabsContent value="spanish" className="bg-white p-8 rounded-lg shadow">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">Política de Privacidad</h2>
              
              <p className="mb-4">Fecha de Vigencia: 15 de marzo de 2024</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Introducción</h3>
              <p>Tu Ayuda Comercial LLC ("nosotros," "nos," o "nuestro") se compromete a proteger su información personal y su derecho a la privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestros servicios, incluidos los proporcionados en colaboración con LG Business Capital LLC.</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Información que Recopilamos</h3>
              <h4 className="text-lg font-semibold mt-4 mb-2">Información Personal que Usted Proporciona</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Información de Contacto: Nombre, dirección, correo electrónico, número de teléfono y otros datos de contacto.</li>
                <li>Información de Solicitud de Préstamo: Datos financieros, detalles del negocio, Número de Seguro Social, Número de Identificación Fiscal.</li>
                <li>Datos de Comunicación: Información proporcionada en comunicaciones con nosotros.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Información Recopilada Automáticamente</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Datos de Uso: Dirección IP, tipo de navegador, tiempos de acceso.</li>
                <li>Información del Dispositivo: Modelo de hardware, sistema operativo.</li>
                <li>Cookies y Tecnologías Similares</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Cómo Usamos Su Información</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Prestación de Servicios</li>
                <li>Procesamiento de Préstamos</li>
                <li>Comunicación</li>
                <li>Personalización</li>
                <li>Análisis</li>
                <li>Cumplimiento Legal</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Contacto</h3>
              <p>Para preguntas sobre esta política, contáctenos en:</p>
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
              <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
              
              <p className="mb-4">Effective Date: March 15, 2024</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Introduction</h3>
              <p>Tu Ayuda Comercial LLC ("we," "us," or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our services, including those provided in collaboration with LG Business Capital LLC.</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h3>
              <h4 className="text-lg font-semibold mt-4 mb-2">Personal Information You Provide</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact Information: Name, address, email, phone number, and other contact details.</li>
                <li>Loan Application Information: Financial data, business details, Social Security Number, Tax ID.</li>
                <li>Communication Data: Information provided in communications with us.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Information Collected Automatically</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Usage Data: IP address, browser type, access times.</li>
                <li>Device Information: Hardware model, operating system.</li>
                <li>Cookies and Similar Technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">How We Use Your Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Service Delivery</li>
                <li>Loan Processing</li>
                <li>Communication</li>
                <li>Personalization</li>
                <li>Analytics</li>
                <li>Legal Compliance</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Contact</h3>
              <p>For questions about this policy, contact us at:</p>
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

export default PrivacyPolicy;