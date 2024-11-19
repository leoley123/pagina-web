'use client'

import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { AlertCircle, CheckCircle, HelpCircle, XCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Progress } from "./ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const translations = {
  title: "Calculadora de Precalificación para Préstamos SBA 7(a)",
  description: "Complete este formulario para verificar si podría precalificar para un préstamo SBA 7(a).",
  basicInfo: "Información Básica",
  income: "Ingresos",
  debts: "Deudas",
  summary: "Resumen",
  results: "Resultados",
  legalStatus: "¿Es usted ciudadano estadounidense o residente permanente?",
  businessAge: "¿Su negocio ha estado operando por más de dos años?",
  ficoScore: "¿Cuál es su rango de puntaje FICO?",
  currentDefault: "¿Está actualmente en incumplimiento de alguna deuda SBA o federal?",
  bankruptcy: "¿Ha declarado bancarrota en los últimos 3 años?",
  yes: "Sí",
  no: "No",
  submit: "Enviar",
  next: "Siguiente",
  previous: "Anterior",
  selectFicoScore: "Seleccione el rango de puntaje FICO",
  ficoTooltip: "Su puntaje FICO es un puntaje de crédito utilizado por los prestamistas para evaluar su solvencia crediticia.",
  revenue: "¿Cuál fue el ingreso de su negocio en el año fiscal 2023?",
  selectRevenue: "Seleccione el rango de ingresos",
  hasDebts: "¿Su negocio tiene alguna deuda?",
  debtTypes: "¿Qué tipos de deudas tiene su negocio?",
  businessCreditCards: "Tarjetas de Crédito Comerciales",
  equipmentLoans: "Préstamos para Equipos",
  commercialMortgage: "Hipoteca Comercial",
  otherBusinessLoans: "Otros Préstamos Comerciales",
  qualificationStatus: "Estado de Calificación",
  startOver: "Comenzar de Nuevo",
  qualificationSummary: "Resumen de Calificación",
  meetsCriteria: "Cumple con los criterios",
  doesNotMeetCriteria: "No cumple con los criterios",
  nextSteps: "Próximos Pasos",
  improveChances: "Cómo Mejorar sus Posibilidades",
}

export default function LoanCalculator() {
  const [formData, setFormData] = useState({
    legalStatus: '',
    businessAge: '',
    ficoScore: '',
    currentDefault: '',
    bankruptcy: '',
    revenue: '',
    hasDebts: '',
    debtTypes: [] as string[],
  })
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [result, setResult] = useState<{
    qualifies: boolean,
    reasons: string[],
    suggestions: string[],
  } | null>(null)

  const handleChange = (name: string, value: string | string[]) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  useEffect(() => {
    const totalFields = Object.keys(formData).length
    const completedFields = Object.values(formData).filter(value => 
      value !== '' && (Array.isArray(value) ? value.length > 0 : true)
    ).length
    setProgress((completedFields / totalFields) * 100)
  }, [formData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const reasons: string[] = []
    const suggestions: string[] = []

    if (formData.legalStatus !== 'yes') {
      reasons.push("No es ciudadano estadounidense o residente permanente")
      suggestions.push("Los préstamos SBA están disponibles solo para ciudadanos estadounidenses o residentes permanentes")
    }

    if (formData.businessAge !== 'yes') {
      reasons.push("El negocio no ha estado operando por más de dos años")
      suggestions.push("Considere opciones de financiamiento para empresas más nuevas o espere hasta que su negocio tenga más de dos años de operación")
    }

    if (!['660-700', '700-725', 'more than 725'].includes(formData.ficoScore)) {
      reasons.push("Puntaje FICO por debajo del rango preferido")
      suggestions.push("Trabaje en mejorar su puntaje de crédito. Considere consultar con un asesor financiero para estrategias específicas")
    }

    if (formData.currentDefault === 'yes') {
      reasons.push("Actualmente en incumplimiento de una deuda SBA o federal")
      suggestions.push("Resuelva cualquier incumplimiento de deuda antes de solicitar un nuevo préstamo SBA")
    }

    if (formData.bankruptcy === 'yes') {
      reasons.push("Ha declarado bancarrota en los últimos 3 años")
      suggestions.push("Espere hasta que hayan pasado al menos 3 años desde la declaración de bancarrota antes de solicitar un préstamo SBA")
    }

    if (!['150000-249999', '250000 or more'].includes(formData.revenue)) {
      reasons.push("Ingresos del negocio por debajo del rango preferido")
      suggestions.push("Enfóquese en estrategias para aumentar los ingresos de su negocio")
    }

    const qualifies = reasons.length === 0

    if (qualifies) {
      suggestions.push("Contacte a un prestamista SBA aprobado para discutir los próximos pasos en el proceso de solicitud")
      suggestions.push("Prepare sus estados financieros y plan de negocios para la solicitud formal")
    }

    setResult({ qualifies, reasons, suggestions })
    setCurrentStep(5) // Move to results page
  }

  const isStepComplete = (step: number) => {
    switch (step) {
      case 0:
        return formData.legalStatus !== '' && formData.businessAge !== '' && formData.ficoScore !== ''
      case 1:
        return formData.currentDefault !== '' && formData.bankruptcy !== ''
      case 2:
        return formData.revenue !== ''
      case 3:
        return formData.hasDebts !== '' && (formData.hasDebts === 'no' || formData.debtTypes.length > 0)
      case 4:
        return true // Summary page is always complete
      default:
        return false
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="legalStatus" className="text-blue-800 font-semibold">{translations.legalStatus}</Label>
              <RadioGroup
                name="legalStatus"
                onValueChange={(value) => handleChange('legalStatus', value)}
                className="flex space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="legalStatus-yes" />
                  <Label htmlFor="legalStatus-yes">{translations.yes}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="legalStatus-no" />
                  <Label htmlFor="legalStatus-no">{translations.no}</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="businessAge" className="text-blue-800 font-semibold">{translations.businessAge}</Label>
              <RadioGroup
                name="businessAge"
                onValueChange={(value) => handleChange('businessAge', value)}
                className="flex space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="business-age-yes" />
                  <Label htmlFor="business-age-yes">{translations.yes}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="business-age-no" />
                  <Label htmlFor="business-age-no">{translations.no}</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="ficoScore" className="text-blue-800 font-semibold">{translations.ficoScore}</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 inline-block ml-1 text-blue-600" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{translations.ficoTooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Select onValueChange={(value) => handleChange('ficoScore', value)}>
                <SelectTrigger className="mt-2 bg-white">
                  <SelectValue placeholder={translations.selectFicoScore} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="less than 660">Menos de 660</SelectItem>
                  <SelectItem value="660-700">660 - 700</SelectItem>
                  <SelectItem value="700-725">700 - 725</SelectItem>
                  <SelectItem value="more than 725">Más de 725</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentDefault" className="text-blue-800 font-semibold">{translations.currentDefault}</Label>
              <RadioGroup
                name="currentDefault"
                onValueChange={(value) => handleChange('currentDefault', value)}
                className="flex space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="current-default-yes" />
                  <Label htmlFor="current-default-yes">{translations.yes}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="current-default-no" />
                  <Label htmlFor="current-default-no">{translations.no}</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="bankruptcy" className="text-blue-800 font-semibold">{translations.bankruptcy}</Label>
              <RadioGroup
                name="bankruptcy"
                onValueChange={(value) => handleChange('bankruptcy', value)}
                className="flex space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="bankruptcy-yes" />
                  <Label htmlFor="bankruptcy-yes">{translations.yes}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="bankruptcy-no" />
                  <Label htmlFor="bankruptcy-no">{translations.no}</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <Label htmlFor="revenue" className="text-blue-800 font-semibold">{translations.revenue}</Label>
            <Select onValueChange={(value) => handleChange('revenue', value)}>
              <SelectTrigger className="mt-2 bg-white">
                <SelectValue placeholder={translations.selectRevenue} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less than 150000">Menos de $150,000</SelectItem>
                <SelectItem value="150000-249999">$150,000 - $249,999</SelectItem>
                <SelectItem value="250000 or more">$250,000 o más</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="hasDebts" className="text-blue-800 font-semibold">{translations.hasDebts}</Label>
              <RadioGroup
                name="hasDebts"
                onValueChange={(value) => handleChange('hasDebts', value)}
                className="flex space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="has-debts-yes" />
                  <Label htmlFor="has-debts-yes">{translations.yes}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="has-debts-no" />
                  <Label htmlFor="has-debts-no">{translations.no}</Label>
                </div>
              </RadioGroup>
            </div>
            {formData.hasDebts === 'yes' && (
              <div>
                <Label className="text-blue-800 font-semibold">{translations.debtTypes}</Label>
                <div className="space-y-2 mt-2">
                  {['businessCreditCards', 'equipmentLoans', 'commercialMortgage', 'otherBusinessLoans'].map((debtType) => (
                    <div key={debtType} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={debtType}
                        checked={formData.debtTypes.includes(debtType)}
                        onChange={(e) => {
                          const updatedDebtTypes = e.target.checked
                            ? [...formData.debtTypes, debtType]
                            : formData.debtTypes.filter(type => type !== debtType)
                          handleChange('debtTypes', updatedDebtTypes)
                        }}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <Label htmlFor={debtType}>{translations[debtType as keyof typeof translations]}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800">{translations.summary}</h3>
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <strong>{translations[key as keyof typeof translations]}:</strong> {
                  Array.isArray(value) ? value.join(', ') : value
                }
              </div>
            ))}
          </div>
        )
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-800">{translations.results}</h3>
            <Alert variant={result?.qualifies ? 'default' : 'destructive'}>
              {result?.qualifies ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              <AlertTitle>{translations.qualificationStatus}</AlertTitle>
              <AlertDescription>
                {result?.qualifies 
                  ? "Basado en la información proporcionada, es posible que califique para un préstamo SBA 7(a)." 
                  : "Basado en la información proporcionada, es posible que no califique para un préstamo SBA 7(a) en este momento."}
              </AlertDescription>
            </Alert>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">{translations.qualificationSummary}</h4>
              <ul className="list-disc pl-5 space-y-2">
                {result?.reasons.map((reason, index) => (
                  <li key={index} className="text-red-600">{reason}</li>
                ))}
                {result?.qualifies && <li className="text-green-600">{translations.meetsCriteria}</li>}
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">
                {result?.qualifies ? translations.nextSteps : translations.improveChances}
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                {result?.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
            
            <Button 
              onClick={() => {
                setFormData({
                  legalStatus: '',
                  businessAge: '',
                  ficoScore: '',
                  currentDefault: '',
                  bankruptcy: '',
                  revenue: '',
                  hasDebts: '',
                  debtTypes: [],
                })
                setCurrentStep(0)
                setResult(null)
              }}
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              {translations.startOver}
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-gray-100 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">{translations.title}</CardTitle>
        <CardDescription className="text-blue-100 mt-2">{translations.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Progress value={progress} className="w-full mb-6" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              {currentStep === 0 && translations.basicInfo}
              {currentStep === 1 && translations.basicInfo}
              {currentStep === 2 && translations.income}
              {currentStep === 3 && translations.debts}
              {currentStep === 4 && translations.summary}
              {currentStep === 5 && translations.results}
            </h3>
            {renderStep()}
          </div>
          
          {currentStep < 5 && (
            <div className="flex justify-between">
              {currentStep > 0 && (
                <Button 
                  type="button" 
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="bg-gray-300 text-gray-800 hover:bg-gray-400"
                >
                  {translations.previous}
                </Button>
              )}
              {currentStep < 4 ? (
                <Button 
                  type="button" 
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!isStepComplete(currentStep)}
                  className="bg-blue-600 text-white hover:bg-blue-700 ml-auto"
                >
                  {translations.next}
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  className="bg-green-600 text-white hover:bg-green-700 ml-auto"
                >
                  {translations.submit}
                </Button>
              )}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}