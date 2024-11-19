import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ScrollArea } from "../components/ui/scroll-area";
import PageHeader from '../components/PageHeader';

export default function ConstructionLoansGuide() {
  const sections = [
    {
      title: "Aspectos Básicos",
      items: [
        {
          title: "Tipo y Propósito",
          content: "Los préstamos de construcción están diseñados para financiar la edificación de nuevas viviendas unifamiliares, casas adosadas y viviendas multifamiliares (hasta cuatro unidades). Están dirigidos principalmente a inversionistas, desarrolladores y constructores que buscan iniciar proyectos desde cero."
        },
        {
          title: "Montos del Préstamo",
          content: "Los montos varían desde un mínimo de $100,000 - $250,000 hasta un máximo de $2 millones o más, dependiendo del prestamista y las características del proyecto."
        },
        {
          title: "Relación Préstamo-Costo (LTC)",
          content: "Típicamente, se financia hasta el 85% del costo de construcción. Algunos prestamistas usan la relación préstamo-valor después de la reparación (ARV), que puede llegar al 70-75% del valor proyectado."
        }
      ]
    },
    {
      title: "Requisitos Financieros",
      items: [
        {
          title: "Pago Inicial",
          content: "La mayoría de los prestamistas requieren una inversión inicial del 10% al 15% del costo total del proyecto. Los perfiles de mayor riesgo pueden necesitar aportar más capital."
        },
        {
          title: "Tasas de Interés",
          content: "Las tasas varían entre 7% y 12%, dependiendo del perfil de riesgo del solicitante, el tamaño del préstamo y la solvencia crediticia. Los pagos suelen ser solo de intereses durante la construcción."
        },
        {
          title: "Puntuación Crediticia",
          content: "Se suele exigir un puntaje de crédito mínimo de 600 a 620. Para obtener mejores términos, se recomienda una puntuación superior a 700."
        }
      ]
    },
    {
      title: "Términos y Condiciones",
      items: [
        {
          title: "Duración del Préstamo",
          content: "Los préstamos de construcción son de corto plazo, generalmente entre 12 y 18 meses. Algunos prestamistas ofrecen extensiones de 3 a 6 meses según las necesidades del proyecto."
        },
        {
          title: "Experiencia del Constructor",
          content: "Los prestamistas prefieren constructores con al menos 2-3 proyectos completados. Los constructores sin experiencia pueden enfrentar requisitos más estrictos y tasas más altas."
        },
        {
          title: "Cronograma de Construcción",
          content: "El financiamiento se estructura por etapas, con fondos liberados al completar cada fase del proyecto. Se realizan inspecciones regulares para verificar el progreso."
        }
      ]
    },
    {
      title: "Consideraciones Adicionales",
      items: [
        {
          title: "Penalización por Pago Anticipado",
          content: "Algunos préstamos incluyen penalizaciones si el solicitante paga antes del tiempo acordado. Es importante verificar estas condiciones con el prestamista."
        },
        {
          title: "Reservas",
          content: "Los prestamistas pueden exigir reservas de construcción (5-10% del costo total) y de intereses para cubrir costos imprevistos y pagos durante la construcción."
        },
        {
          title: "Tasación y Permisos",
          content: "Se requiere una tasación detallada del terreno y una proyección del valor futuro. Todos los permisos de construcción necesarios deben estar asegurados antes de liberar los fondos."
        }
      ]
    }
  ];

  return (
    <div>
      <PageHeader
        title="Guía Completa: Préstamos de Construcción de Viviendas"
        description="Requisitos, Condiciones y Estrategias para Calificar"
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
      />

      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600">
          <CardContent className="pt-6">
            <p className="text-white text-lg">
              Los préstamos de construcción son una herramienta financiera esencial para quienes buscan construir una vivienda o invertir en proyectos de construcción. Esta guía te proporcionará toda la información necesaria para entender y calificar para estos préstamos.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-gray-900">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`item-${itemIndex}`}>
                        <AccordionTrigger className="text-gray-900">{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-gray-900">{item.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Conclusión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 leading-relaxed">
              Los préstamos de construcción ofrecen una excelente oportunidad para desarrollar proyectos desde cero. Con términos favorables para constructores e inversionistas experimentados, estos préstamos pueden ser la clave para tu próximo proyecto exitoso.
            </p>
            <p className="mt-4 text-gray-900 leading-relaxed">
              Recuerda: con los conocimientos adecuados y un plan de construcción sólido, puedes acceder a los fondos necesarios para construir una propiedad rentable. ¡Empieza a planificar tu proyecto hoy mismo!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}