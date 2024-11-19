import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

export default function SBALoanGuide() {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900">
      <CardHeader className="bg-blue-600 text-white dark:bg-blue-800">
        <CardTitle className="text-2xl sm:text-3xl">Cómo Calificar Para Un Préstamo de Cash-Flow del SBA en el 2024</CardTitle>
        <CardDescription className="text-blue-100 dark:text-blue-200">Guía completa para negocios con dos años o más</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="introduccion" className="w-full">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border border-gray-200 dark:border-gray-700">
            <TabsList className="w-max bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="introduccion" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Introducción</TabsTrigger>
              <TabsTrigger value="requisitos" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Requisitos</TabsTrigger>
              <TabsTrigger value="credito" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Crédito</TabsTrigger>
              <TabsTrigger value="ingresos" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Ingresos</TabsTrigger>
              <TabsTrigger value="cashflow" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Cash-Flow</TabsTrigger>
            </TabsList>
          </ScrollArea>
          <TabsContent value="introduccion">
            <ScrollArea className="h-[400px] w-full rounded-md border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">Préstamos de Cash-flow del SBA</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Este artículo se enfoca en ayudar a todos los dueños de negocios que quieran optar a un préstamo de cash-flow del SBA en el 2024.</p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-blue-600 dark:text-blue-400">Cuánto puede obtener</h4>
              <p className="mb-2 text-gray-700 dark:text-gray-300">Desde el 1 de agosto del 2023, el préstamo máximo de cash-flow del SBA aumentó de $350,000 a $500,000. Cada préstamo tiene un término de 10 años.</p>
              <p className="text-gray-700 dark:text-gray-300">Técnicamente usted puede tomar un préstamo de hasta 5 millones de dólares con el SBA, pero para un préstamo de cash-flow el máximo por año es de $500,000.</p>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="requisitos">
            <ScrollArea className="h-[400px] w-full rounded-md border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="fundamentales">
                  <AccordionTrigger className="text-blue-600 dark:text-blue-400">Requisitos Fundamentales</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Residencia o ciudadanía de los Estados Unidos</li>
                      <li>Tener 2 años mínimos operando su negocio</li>
                      <li>Negocio operado por dueño(a)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="documentos">
                  <AccordionTrigger className="text-blue-600 dark:text-blue-400">Documentos Necesarios</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Últimos 6 meses de estados bancarios del negocio</li>
                      <li>Impuestos del negocio: años 2023, 2022, 2021</li>
                      <li>Impuestos personales: años 2023, 2022, 2021</li>
                      <li>Profit & loss 2023 y YTD</li>
                      <li>Balance Sheet 2023 y YTD</li>
                      <li>Copia a color de la licencia de conducir</li>
                      <li>Cheque void</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="credito">
            <ScrollArea className="h-[400px] w-full rounded-md border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">Requisitos de Crédito</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Los requisitos de crédito se dividen en crédito personal y FICO SBSS Score.</p>
              <div className="overflow-x-auto">
                <table className="w-full mt-4 border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400">Ingreso Anual</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400">Crédito Mínimo FICO</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400">SBSS Score</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-2 text-blue-600 dark:text-blue-400">Préstamo Máximo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">Más de $250,000</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">660</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">155</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">$500,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">$150,000 - $250,000</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">700</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">175</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">$150,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">Menos de $150,000</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">725</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">175</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-300">$50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="ingresos">
            <ScrollArea className="h-[400px] w-full rounded-md border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">Requisitos de Ingreso</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="mas250k">
                  <AccordionTrigger className="text-blue-600 dark:text-blue-400">Más de $250,000</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <p>Si su compañía genera más de $250,000 y el análisis de cash-flow es saludable, las posibilidades de aprobación son mucho más altas. Generalmente, puede calificar para el préstamo máximo de $500,000.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="150k-250k">
                  <AccordionTrigger className="text-blue-600 dark:text-blue-400">De $150,000 a $249,999</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <p>Menos bancos prestan en este rango. El préstamo máximo que suelen ofrecer es de $150,000.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="menos150k">
                  <AccordionTrigger className="text-blue-600 dark:text-blue-400">Menos de $150,000</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <p>Los bancos están empezando a prestar a este grupo, generalmente hasta $50,000, pero con requisitos más estrictos.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="cashflow">
            <ScrollArea className="h-[400px] w-full rounded-md border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">Análisis de Cash-flow</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="dscr">
                  <AccordionTrigger className="text-blue-600 dark:text-blue-400">DSCR (Debt Service Coverage Ratio)</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <p>El DSCR calcula el ingreso disponible de su negocio usando el número EBITDA y lo compara con las deudas de su negocio. La mayoría de los bancos buscan un DSCR de 1:25, lo que significa que usted tiene $1.25 por cada $1.00 de deuda en su negocio.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="gdscr">
                  <AccordionTrigger className="text-blue-600 dark:text-blue-400">GDSCR (Global Debt Coverage Service Ratio)</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <p>El GDSCR es similar al DSCR pero incluye las deudas personales además de las del negocio. Busca ver si las deudas personales afectarían la capacidad de pago de la compañía.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="consolidacion">
                  <AccordionTrigger className="text-blue-600 dark:text-blue-400">Consolidación de Deudas</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <p>Consolidar deudas puede ser favorable para la aprobación del préstamo, especialmente si mejora la liquidez del negocio.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}