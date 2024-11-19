import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import PageHeader from '../components/PageHeader';
import SBANavigation from '../components/SBANavigation';
import LoanCalculator from '../components/LoanCalculator';

export default function SBACashFlowGuide() {
  return (
    <div>
      <PageHeader
        title="Guía del Préstamo Cash-Flow SBA"
        description="Todo lo que necesitas saber sobre los préstamos de cash-flow del SBA en 2024"
        imageSrc="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80"
      />

      <SBANavigation currentPage="Cash Flow" />

      <div className="max-w-4xl mx-auto p-6 bg-gray-50">
        {/* Calculator Section */}
        <div className="mb-8">
          <LoanCalculator />
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>¿Qué es un Préstamo de Cash-Flow?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900">
              Los préstamos de cash-flow están diseñados específicamente para negocios en operación que buscan capital sin necesidad de colateral. Aunque el SBA ofrece varios programas, en este artículo nos centraremos exclusivamente en los préstamos de cash-flow para negocios que llevan al menos dos años operando.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cuánto Puedes Obtener</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
          <li>A partir del 1 de agosto de 2023, el SBA incrementó el límite de los préstamos de cash-flow de $350,000 a $500,000, con un plazo de pago de 10 años.</li>
          <li>El máximo anual para préstamos de cash-flow es de $500,000.</li>
          <li>Podrías solicitar un préstamo de $500,000 cada año durante los próximos 10 años, acumulando hasta $5 millones en financiamiento.</li>
          <li>Es posible diversificar el financiamiento, por ejemplo, obteniendo $250,000 cada año por 20 años.</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Requisitos Fundamentales</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Residencia o Ciudadanía: Ciudadano estadounidense o residente permanente.</li>
                <li>Tiempo de Operación del Negocio: Al menos 2 años en operación continua.</li>
                <li>Gestión Activa: El dueño debe estar involucrado en la gestión diaria del negocio.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Requisitos de Crédito</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ingreso Anual</TableHead>
                    <TableHead>FICO Mínimo</TableHead>
                    <TableHead>SBSS Score</TableHead>
                    <TableHead>Préstamo Máximo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>&gt; $250,000</TableCell>
                    <TableCell>660</TableCell>
                    <TableCell>155</TableCell>
                    <TableCell>$500,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>$150K-$250K</TableCell>
                    <TableCell>700</TableCell>
                    <TableCell>175</TableCell>
                    <TableCell>$150,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>&lt; $150,000</TableCell>
                    <TableCell>725</TableCell>
                    <TableCell>175</TableCell>
                    <TableCell>$50,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Documentos Necesarios</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Últimos 6 meses de estados bancarios</li>
              <li>Declaraciones de impuestos comerciales de 2023, 2022, y (si están disponibles) 2021</li>
              <li>Declaraciones de impuestos personales de los mismos años</li>
              <li>Estado de Resultados (Profit & Loss) para 2023 y YTD</li>
              <li>Balance General para 2023 y YTD</li>
              <li>Copia a color de la licencia de conducir</li>
              <li>Cheque void para la cuenta bancaria del negocio</li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">¿Necesitas Ayuda?</h2>
          <p className="text-gray-900 mb-4">
            Nuestro equipo de expertos está listo para ayudarte a obtener el financiamiento que necesitas.
          </p>
          <div className="flex gap-4">
            <Link
              to="/cita"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Agendar Consulta
            </Link>
            <Link
              to="/contactenos"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}