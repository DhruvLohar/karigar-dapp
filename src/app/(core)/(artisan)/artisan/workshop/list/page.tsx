"use client"
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { WorkshopDetailsForm } from "@/components/workshop/WorkshopDetailsForm"
import { WorkshopTimeline } from "@/components/workshop/WorkshopTimeline"
import { formSchema } from "@/components/workshop/schema"
export default function WorkshopPlannerPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    if (currentStep === 1) {
      setCurrentStep(2)
      window.scrollTo(0, 0)
    } else {
      router.push("/artisan/workshop/Workshop-Title-4")
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Workshop Planning Assistant</h1>
      <p className="text-gray-600 mb-8">Design your perfect artisan workshop with our step-by-step guide</p>

      {currentStep === 1 ? (
        <WorkshopDetailsForm onSubmit={handleSubmit} />
      ) : (
        <WorkshopTimeline
          onBack={() => setCurrentStep(1)}
          onCreateWorkshop={() => router.push("/workshop/Workshop-Title-4")}
        />
      )}
    </div>
  )
}