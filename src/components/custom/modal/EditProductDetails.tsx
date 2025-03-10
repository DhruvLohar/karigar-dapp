"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    title: z.string().max(200),
    description: z.string(),
    backStory: z.string(),
    price: z.number().positive(),
    isCustomizable: z.boolean(),
    customNote: z.string().optional(),
    dimensions: z.object({
        length: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        weight: z.number().optional(),
    }),
    productDetails: z.object({
        // Define the structure of productDetails if necessary
    }),
    rawMaterial: z.string(),
    category: z.enum(['food', 'clothing', 'artwork', 'handicraft', 'other']),
    quantity: z.number().positive().optional(),
    restockDate: z.date().optional(),
    taxPercent: z.number().min(0).max(100),
})

export default function EditProductDetailsModal() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "Organic Honey",
            price: 12.99,
            isCustomizable: true,
            customNote: "",
            dimensions: {
                length: undefined,
                width: undefined,
                height: undefined,
                weight: undefined,
            },
            productDetails: {},
            rawMaterial: "",
            category: "food",
            quantity: 20,
            restockDate: undefined,
            taxPercent: 18,
        },
    })

    interface ProductFormValues extends z.infer<typeof formSchema> { }

    function onSubmit(values: ProductFormValues): void {
        console.log(values)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Edit Product Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Edit Product Details</DialogTitle>
                    <DialogDescription>
                        Update the product information below.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Price" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="isCustomizable"
                            render={({ field }) => (
                                <FormItem className="w-full flex items-center justify-between">
                                    <FormLabel>Customizable</FormLabel>
                                    <FormControl>
                                        <Input type="checkbox" className="w-6 h-6" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Quantity" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="restockDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Restock Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" placeholder="Restock Date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="taxPercent"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tax Percent</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Tax Percent" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Save Changes</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
