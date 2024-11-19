import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#04042c] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="https://storage.googleapis.com/cdn-leoley/Dark%20logo.jpg" 
              alt="Tu Ayuda Comercial" 
              className="h-16 w-auto"
            />
            <p className="text-sm">
              Ayudando a empresarios a alcanzar sus metas financieras y comerciales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/prestamos-sba" className="hover:text-blue-400">Prestamos del SBA</Link></li>
              <li><Link to="/bienes-raices" className="hover:text-blue-400">Bienes Raices</Link></li>
              <li><a href="https://blog.tuayudacomercial.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Blog</a></li>
              <li><Link to="/cita" className="hover:text-blue-400">Agendar Cita</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacidad" className="hover:text-blue-400">Política de Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-blue-400">Términos y Condiciones</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(352) 931-8308</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>admin@tuayudacomercial.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.youtube.com/@Tuayudacomercial1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-red-500 transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/tuayudacomercial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/tuayudacomercial1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© Copyright 2024. LG Business Capital LLC | Tu Ayuda Comercial LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;