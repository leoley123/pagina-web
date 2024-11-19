import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

export default function LoanEligibilityTable() {
  return (
    <div className="w-full overflow-x-auto p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <Table className="w-full">
        <TableCaption className="text-lg font-semibold mb-4 text-gray-700">
          Tabla de Elegibilidad para Préstamos
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-blue-500 to-blue-600">
            <TableHead className="whitespace-nowrap text-white font-bold py-3">Ingreso Anual</TableHead>
            <TableHead className="text-right text-white font-bold py-3">FICO Mínimo</TableHead>
            <TableHead className="text-right text-white font-bold py-3">SBSS Score</TableHead>
            <TableHead className="text-right text-white font-bold py-3">Préstamo Máximo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-white hover:bg-blue-50 transition-colors duration-200">
            <TableCell className="font-medium text-blue-600">&gt; $250,000</TableCell>
            <TableCell className="text-right">660</TableCell>
            <TableCell className="text-right">155</TableCell>
            <TableCell className="text-right font-semibold text-green-600">$500,000</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
            <TableCell className="font-medium text-blue-600">$150K-$250K</TableCell>
            <TableCell className="text-right">700</TableCell>
            <TableCell className="text-right">175</TableCell>
            <TableCell className="text-right font-semibold text-green-600">$150,000</TableCell>
          </TableRow>
          <TableRow className="bg-white hover:bg-blue-50 transition-colors duration-200">
            <TableCell className="font-medium text-blue-600">&lt; $150,000</TableCell>
            <TableCell className="text-right">725</TableCell>
            <TableCell className="text-right">175</TableCell>
            <TableCell className="text-right font-semibold text-green-600">$50,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}