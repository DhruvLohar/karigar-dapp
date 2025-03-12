"use client"
import { Button } from "@/components/ui/button"
import { CheckCircle2, CircleDashed, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

const dummyAIResponse = {
  steps: [
    {
      title: "Pre-Workshop Preparation",
      description: "2 weeks before your workshop date, prepare all materials and create detailed handouts for participants.",
      tasks: ["Order all materials in bulk to save costs", "Create step-by-step handouts", "Prepare sample pieces at different stages"]
    },
    {
      title: "Workshop Setup",
      description: "Arrive 1.5 hours early to set up workstations and arrange materials in an accessible way.",
      tasks: ["Arrange seating in a U-shape for better visibility", "Prepare individual material kits", "Set up your demonstration area with good lighting"]
    },
    {
      title: "Introduction (15 mins)",
      description: "Start with a brief introduction to the craft history and show examples of finished pieces.",
      tasks: ["Share your personal journey", "Show examples of different skill levels", "Explain safety precautions"]
    },
    {
      title: "Demonstration (30 mins)",
      description: "Demonstrate the core techniques slowly, explaining each step before participants begin.",
      tasks: ["Break down complex movements", "Show common mistakes and how to fix them", "Use analogies to explain techniques"]
    },
    {
      title: "Hands-on Practice (2 hours)",
      description: "Allow participants to practice with your guidance. Move around the room to assist individuals.",
      tasks: ["Encourage experimentation", "Provide individual feedback", "Demonstrate techniques again for those who need help"]
    },
    {
      title: "Wrap-up (15 mins)",
      description: "Review techniques, answer questions, and discuss next steps for continuing practice.",
      tasks: ["Suggest resources for continued learning", "Collect feedback", "Share care instructions for their creations"]
    }
  ],
  tips: [
    "Keep demonstrations under 10 minutes before letting participants try",
    "Take photos of participants' work (with permission) for your portfolio",
    "Consider offering a small discount on future workshops to returning participants",
    "Create a relaxed atmosphere with background music appropriate to the activity",
    "Prepare for different learning styles - have visual aids, verbal instructions, and hands-on examples"
  ],
  materials: ["Basic tool kit", "Raw materials", "Protective equipment", "Handouts", "Reference materials"],
  pricing: "Based on your workshop type and duration, similar workshops charge between $85-120 per participant, with materials included."
}

interface WorkshopTimelineProps {
  onBack: () => void
  onCreateWorkshop: () => void
}

export function WorkshopTimeline({ onBack, onCreateWorkshop }: WorkshopTimelineProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <Badge variant="outline" className="px-3 py-1">
          <span className="font-medium text-sm">Step 2: Workshop Timeline & Planning</span>
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Workshop Timeline</CardTitle>
            <CardDescription>
              Based on your inputs, here's a suggested timeline for your workshop
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {dummyAIResponse.steps.map((step, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  {index !== dummyAIResponse.steps.length - 1 && (
                    <div className="absolute top-0 left-3 h-full w-px bg-gray-200"></div>
                  )}
                  <div className="absolute top-0 left-0 bg-white">
                    {index === dummyAIResponse.steps.length - 1 ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                      <CircleDashed className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                      {step.tasks.map((task, idx) => (
                        <li key={idx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                AI Workshop Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Our AI has analyzed your workshop details and can provide personalized recommendations to help make your workshop successful.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Get AI Workshop Insights
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <ScrollArea className="max-h-[70vh]">

                    <DialogHeader>
                      <DialogTitle>AI Workshop Insights</DialogTitle>
                      <DialogDescription>
                        Personalized recommendations for your workshop
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 my-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Teaching Tips</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {dummyAIResponse.tips.map((tip, idx) => (
                            <li key={idx} className="text-gray-700">{tip}</li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-semibold text-lg mb-2">Materials Checklist</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {dummyAIResponse.materials.map((material, idx) => (
                            <li key={idx} className="text-gray-700">{material}</li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-semibold text-lg mb-2">Pricing Recommendation</h3>
                        <p className="text-gray-700">{dummyAIResponse.pricing}</p>
                      </div>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ready to Create</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Review your workshop plan above. When you're satisfied, click below to create your workshop.
              </p>
              <Button
                className="w-full"
                onClick={() => {
                  // In a real app, you would save the data here
                  onCreateWorkshop();
                }}
              >
                Create Workshop
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back to Workshop Details
        </Button>
      </div>
    </div>
  )
}