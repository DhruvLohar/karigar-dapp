"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IndianRupee } from "lucide-react";

// Schema to handle string inputs and validate as a number
const FormSchema = z.object({
  value: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Value must be a number.",
    })
    .refine((val) => Number(val) <= 5000, {
      message: "Value must be 5000 or less.",
    }),
});

const InputForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      value: "",
    },
  });

  interface FormValues {
    value: string;
  }

  const onSubmit = (data: FormValues) => {
    console.log(data.value);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full lg:w-1/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormDescription>
                  Or Enter any value. The value must be 5000 or less.
                </FormDescription>
                <FormMessage />
                <FormControl>
                  <Input placeholder="Enter a value" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default InputForm;
