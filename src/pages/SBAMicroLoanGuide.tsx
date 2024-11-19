import React from "react";
import PageHeader from '../components/PageHeader';
import SBANavigation from '../components/SBANavigation';
import MicroLoanCalculator from '../components/MicroLoanCalculator';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function SBAMicroLoanGuide() {
  const requirements = [
    {
      title: "Elegibilidad Básica",
      items: [
        "Negocio con fines de lucro",
        "Operar en Estados Unidos",
        "Inversión personal en el negocio",
        "Buenos antecedentes crediticios"
      ]
    },
    {
      title: "Requisitos Financieros",
      items: [
        "Depósitos mensuales de $12,000+",
        "Sin bancarrota en los últimos 3 años",
        "Impuestos al día",
        "Sin litigios pendientes"
      ]
    }
  ];

  const terms = [
    { label: "Monto Máximo", value: "$50,000" },
    { label: "Plazo del Préstamo", value: "10 años" },
    { label: "Tasa de Interés", value: "Prime + 2.75%" },
    { label: "Tiempo de Aprobación", value: "10 días laborables" },
    { label: "Colateral", value: "No requerido" }
  ];

  const documents = [
    "Estados bancarios de los últimos 3 meses",
    "Estado de resultados (P&L) del año en curso",
    "Identificación válida",
    "Declaraciones de impuestos personales",
    "Declaraciones de impuestos del negocio (si aplica)"
  ];

  return (
    <div>
      <PageHeader
        title="Guía del Préstamo SBA Micro Loan"
        description="Todo lo que necesitas saber sobre el programa de microcréditos SBA"
        imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
      />

      <SBANavigation currentPage="Micro Loan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Calculator Section */}
        <div className="mb-16">
          <MicroLoanCalculator />
        </div>

        {/* Terms Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Términos Generales del Préstamo</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {terms.map((term, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{term.label}</TableCell>
                    <TableCell className="text-right">{term.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {requirements.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documents Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Documentos Requeridos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Proceso de Solicitud</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Precalificación",
                  description: "Evaluación inicial de elegibilidad"
                },
                {
                  step: 2,
                  title: "Documentación",
                  description: "Recopilación y verificación de documentos"
                },
                {
                  step: 3,
                  title: "Aprobación y Cierre",
                  description: "Revisión final y desembolso de fondos"
                }
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para Comenzar?</h2>
          <p className="text-gray-600 mb-8">
            Nuestro equipo está listo para ayudarte con tu solicitud de préstamo SBA Micro Loan
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
}