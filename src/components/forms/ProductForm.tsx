"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { Check } from "lucide-react"

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  price: z.string().min(1, "Price is required"),
  images: z.any(),
  backstory: z.string().min(10, "Backstory must be at least 10 characters."),
  otherDetails: z.string().optional(),
  dimensions: z.object({
    width: z.string().min(1, "Width is required"),
    length: z.string().min(1, "Length is required"),
    height: z.string().min(1, "Height is required"),
    weight: z.string().min(1, "Weight is required"),
  }),
  rawMaterial: z.string().min(2, "Raw material information is required"),
})

export function ProductForm() {
  const [showSuccess, setShowSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      backstory: "",
      otherDetails: "",
      dimensions: {
        width: "",
        length: "",
        height: "",
        weight: "",
      },
      rawMaterial: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setShowSuccess(true)
    // Reset form after 2 seconds
    setTimeout(() => {
      form.reset()
      setShowSuccess(false)
    }, 2000)
  }

  return (
    <ScrollArea className="h-[80vh] w-full p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price (₹)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Images</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files)}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter product description"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="backstory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Backstory</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share the story behind your product"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otherDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Details (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any additional details about your product"
                    className="min-h-[80px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            {["width", "length", "height", "weight"].map((dim) => (
              <FormField
                key={dim}
                control={form.control}
                name={`dimensions.${dim}` as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{dim}</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder={`Enter ${dim}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          <FormField
            control={form.control}
            name="rawMaterial"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Raw Material</FormLabel>
                <FormControl>
                  <Input placeholder="Enter raw material details" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {showSuccess ? (
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Product Added
              </div>
            ) : (
              "Add Product"
            )}
          </Button>
        </form>
      </Form>
    </ScrollArea>
  )
}