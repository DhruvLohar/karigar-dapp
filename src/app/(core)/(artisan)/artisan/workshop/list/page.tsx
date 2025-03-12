"use client"
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { WorkshopDetailsForm } from "@/components/workshop/WorkshopDetailsForm"
import { WorkshopTimeline } from "@/components/workshop/WorkshopTimeline"
import { formSchema } from "@/components/workshop/schema"
import axios from "axios"
export default function WorkshopPlannerPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)

  const [workshop, setWorkshop] = useState(null);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {

    const data = {
      "craft": values.workshopType,
      "audience": values.maxParticipants,
      "duration": values.duration * 60,
      "experience": values.workshopLevel,
      "specialTopics": "glazing techniques"
    }

    try {
      const res = await axios.post("/api/workshop", data);
  
      if (res.status === 200) {
        console.log(res.data);
        setWorkshop(res.data);
      } else {
        console.log("error")
      }
    } catch (error) {
      console.error(error);
    }

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
          workshopData={workshop}
        />
      )}
    </div>
  )
}