import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export default function MicroLoanCalculator() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    businessAge: '',
    creditScore: '',
    monthlyDeposits: '',
    residency: '',
    legalIssues: '',
    taxStatus: '',
    bankruptcy: '',
    criminalHistory: ''
  })
  const [isEligible, setIsEligible] = useState<boolean | null>(null)
  const [ineligibilityReasons, setIneligibilityReasons] = useState<string[]>([])

  const questions = [
    {
      question: "¿Cuánto tiempo lleva operando su negocio?",
      key: "businessAge",
      type: "radio",
      options: [
        { value: "less2months", label: "Menos de 2 meses" },
        { value: "2monthsto2years", label: "Entre 2 meses y 2 años" },
        { value: "more2years", label: "Más de 2 años" }
      ]
    },
    {
      question: "¿Cuál es su puntaje de crédito (FICO)?",
      key: "creditScore",
      type: "number",
      placeholder: "Ingrese su puntaje FICO"
    },
    {
      question: "¿Cuál es el promedio de depósitos mensuales de su negocio?",
      key: "monthlyDeposits",
      type: "number",
      placeholder: "Ingrese el promedio en dólares"
    },
    {
      question: "¿Es usted residente permanente o ciudadano de los Estados Unidos?",
      key: "residency",
      type: "radio",
      options: [
        { value: "yes", label: "Sí" },
        { value: "no", label: "No" }
      ]
    },
    {
      question: "¿Tiene algún litigio pendiente, personal o del negocio?",
      key: "legalIssues",
      type: "radio",
      options: [
        { value: "yes", label: "Sí" },
        { value: "no", label: "No" }
      ]
    },
    {
      question: "¿Están al día todos sus impuestos, personales y del negocio?",
      key: "taxStatus",
      type: "radio",
      options: [
        { value: "yes", label: "Sí" },
        { value: "no", label: "No" }
      ]
    },
    {
      question: "¿Ha estado en bancarrota en los últimos 3 años?",
      key: "bankruptcy",
      type: "radio",
      options: [
        { value: "yes", label: "Sí" },
        { value: "no", label: "No" }
      ]
    },
    {
      question: "¿Tiene alguna condena criminal en su historial?",
      key: "criminalHistory",
      type: "radio",
      options: [
        { value: "yes", label: "Sí" },
        { value: "no", label: "No" }
      ]
    }
  ]

  const handleAnswer = (key: string, value: string) => {
    setAnswers(prev => {
      const newAnswers = { ...prev, [key]: value }
      console.log('Updated answers:', newAnswers)
      return newAnswers
    })
  }

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(prev => prev + 1)
    } else {
      checkEligibility()
    }
  }

  const handlePrevious = () => {
    if (step > 0) {
      setStep(prev => prev - 1)
    }
  }

  const checkEligibility = () => {
    const {
      businessAge,
      creditScore,
      monthlyDeposits,
      residency,
      legalIssues,
      taxStatus,
      bankruptcy,
      criminalHistory
    } = answers

    console.log('Checking eligibility with answers:', answers)

    const reasons: string[] = []

    if (businessAge === 'less2months') {
      reasons.push("Su negocio debe tener al menos 2 meses de operación.")
    }

    if (businessAge === '2monthsto2years' && parseInt(creditScore) < 720) {
      reasons.push("Para negocios con menos de 2 años, se requiere un puntaje de crédito mínimo de 720.")
    }

    if (businessAge === 'more2years' && parseInt(creditScore) < 660) {
      reasons.push("Para negocios con más de 2 años, se requiere un puntaje de crédito mínimo de 660.")
    }

    if (parseInt(monthlyDeposits) < 12000) {
      reasons.push("Sus depósitos mensuales promedio deben ser de $12,000 o más.")
    }

    if (residency === 'no') {
      reasons.push("Debe ser residente permanente o ciudadano de los Estados Unidos.")
    }

    if (legalIssues === 'yes') {
      reasons.push("No debe tener litigios pendientes, personales o del negocio.")
    }

    if (taxStatus === 'no') {
      reasons.push("Todos sus impuestos, personales y del negocio, deben estar al día.")
    }

    if (bankruptcy === 'yes') {
      reasons.push("No debe haber estado en bancarrota en los últimos 3 años.")
    }

    if (criminalHistory === 'yes') {
      reasons.push("No debe tener condenas criminales en su historial.")
    }

    const isEligible = reasons.length === 0
    console.log('Eligibility result:', isEligible)
    console.log('Ineligibility reasons:', reasons)

    setIsEligible(isEligible)
    setIneligibilityReasons(reasons)
    setStep(questions.length) // Move to the results step
  }

  useEffect(() => {
    console.log('Current step:', step)
    console.log('Is eligible:', isEligible)
  }, [step, isEligible])

  const currentQuestion = questions[step]

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Calculadora de Precalificación SBA Micro Loan</CardTitle>
        <CardDescription>Responda las siguientes preguntas para verificar su elegibilidad</CardDescription>
      </CardHeader>
      <CardContent>
        {step < questions.length ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">{currentQuestion.question}</h2>
            {currentQuestion.type === 'radio' ? (
              <RadioGroup onValueChange={(value) => handleAnswer(currentQuestion.key, value)}>
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <Input
                type="number"
                placeholder={currentQuestion.placeholder}
                onChange={(e) => handleAnswer(currentQuestion.key, e.target.value)}
              />
            )}
          </div>
        ) : (
          <div className="text-center space-y-4">
            {isEligible === true && (
              <>
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
                <h2 className="text-xl font-semibold text-green-700">¡Felicidades! Usted podría ser elegible para el préstamo SBA Micro Loan.</h2>
                <p>Por favor, contacte a un asesor para continuar con el proceso de solicitud.</p>
              </>
            )}
            {isEligible === false && (
              <>
                <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
                <h2 className="text-xl font-semibold text-red-700">Lo sentimos, usted no cumple con los requisitos para el préstamo SBA Micro Loan en este momento.</h2>
                <p>Razones por las que no califica:</p>
                <ul className="list-disc text-left pl-6">
                  {ineligibilityReasons.map((reason, index) => (
                    <li key={index} className="mt-2">{reason}</li>
                  ))}
                </ul>
                <p className="mt-4">Le recomendamos revisar los requisitos y considerar otras opciones de financiamiento.</p>
              </>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 0 && step < questions.length && (
          <Button onClick={handlePrevious} variant="outline">Anterior</Button>
        )}
        {step < questions.length - 1 && (
          <Button onClick={handleNext} className="ml-auto">Siguiente</Button>
        )}
        {step === questions.length - 1 && (
          <Button onClick={handleNext} className="ml-auto">Verificar Elegibilidad</Button>
        )}
      </CardFooter>
    </Card>
  )
}