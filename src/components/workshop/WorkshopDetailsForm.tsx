"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { formSchema } from "./schema"
import { WORKSHOP_TYPES, WORKSHOP_LEVELS } from "@/constants"

const workshopTypes = [
  { value: "pottery", label: "Pottery" },
  { value: "weaving", label: "Weaving" },
  { value: "woodworking", label: "Woodworking" },
  { value: "jewelry", label: "Jewelry Making" },
  { value: "textile", label: "Textile Arts" },
  { value: "painting", label: "Painting" },
  { value: "sculpture", label: "Sculpture" },
  { value: "papercraft", label: "Paper Crafts" },
]

interface WorkshopDetailsFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}

export function WorkshopDetailsForm({ onSubmit }: WorkshopDetailsFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Introduction to Crafting",
      description: "A comprehensive hands-on workshop perfect for beginners looking to start their crafting journey. Learn essential techniques and create your first piece.",
      workshopType: workshopTypes[0].value, // "pottery"
      workshopLevel: "beginner",
      date: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 14); // 2 weeks from now based on pre-workshop preparation
        return date;
      })(),
      duration: 3, // 3 hours (15min + 30min + 2hr + 15min from timeline)
      address: "Artisan Studio Workshop Space",
      price: "100", // Middle of suggested range $85-120
      materials: "Basic tool kit, Raw materials, Protective equipment, Handouts, Reference materials",
      maxParticipants: "12", // Good size for U-shaped seating arrangement
      teachingMethod: "combined", // Based on demonstration + hands-on practice in timeline
      includeTakeHome: true, // Based on mentions of participants' creations
    },
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <Badge variant="outline" className="px-3 py-1">
          <span className="font-medium text-sm">Step 1: Basic Workshop Information</span>
        </Badge>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workshop Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a catchy title for your workshop" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be the main title displayed to potential participants.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workshopType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Craft Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of craft" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {workshopTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the primary craft category for your workshop.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Workshop Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe what participants will learn and make"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a detailed description of what participants will learn and create.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workshopLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select skill level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (No experience needed)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Some experience helpful)</SelectItem>
                      <SelectItem value="advanced">Advanced (Prior experience required)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    What level of experience should participants have?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Workshop Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Select when you want to host your workshop.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workshop Duration (hours)</FormLabel>
                  <FormControl>
                    <div className="space-y-3">
                      <Slider
                        min={1}
                        max={8}
                        step={0.5}
                        defaultValue={[field.value]}
                        onValueChange={(value) => field.onChange(value[0])}
                      />
                      <div className="text-center font-medium">
                        {field.value} {field.value === 1 ? "hour" : "hours"}
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    How long will your workshop last?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price per Participant (₹)</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="0"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Set a price that covers materials and your time.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxParticipants"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Participants</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="0"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    How many people can attend your workshop?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Workshop Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the full address" {...field} />
                  </FormControl>
                  <FormDescription>
                    Where will you host your workshop?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="materials"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Materials Needed</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List all materials that will be used"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    List all materials participants will use (indicate if included in price).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="teachingMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Teaching Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="demonstration" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Demonstration (you show, they watch)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="hands-on" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Hands-on (participants practice throughout)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="combined" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Combined (demonstration followed by practice)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="includeTakeHome"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="h-4 w-4 mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Take-home Project</FormLabel>
                    <FormDescription>
                      Will participants take home what they make?
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

          </div>

          <Button type="submit" className="w-full md:w-auto">
            Continue to Workshop Planning
          </Button>
        </form>
      </Form>
    </div>
  )
}