import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const EligibilityCalculator = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    businessAge: '',
    creditScore: '',
    monthlyDeposits: '',
    residency: '',
    legalIssues: '',
    taxStatus: '',
    bankruptcy: '',
    criminalHistory: ''
  });
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const [ineligibilityReasons, setIneligibilityReasons] = useState<string[]>([]);

  // Rest of the component remains the same, just updating the Card components with bg-white

  return (
    <Card className="w-full max-w-lg mx-auto bg-white">
      <CardHeader className="bg-white">
        <CardTitle>Calculadora de Precalificación SBA Micro Loan</CardTitle>
        <CardDescription>Responda las siguientes preguntas para verificar su elegibilidad</CardDescription>
      </CardHeader>
      <CardContent className="bg-white">
        {/* Content remains the same */}
      </CardContent>
      <CardFooter className="flex justify-between bg-white">
        {/* Footer content remains the same */}
      </CardFooter>
    </Card>
  );
};

export default EligibilityCalculator;