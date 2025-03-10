"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useMemo, useState } from "react";
import { StatesAndDistrict } from "@/lib/stateDistrictData";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  contact_number: z.string().length(10),
  state: z.string(),
  district: z.string().optional(),
  gender: z.string().optional(),
  dob: z.date().optional(),
  address: z.string().optional(),
  disability: z.boolean().optional(),
  adhaar_card: z
    .any()
    .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, "Max image size is 2MB."),
  pan_card: z
    .any()
    .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, "Max image size is 2MB."),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterArtisan() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedState, setSelectedState] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact_number: "",
      state: "",
      district: "",
      gender: "",
      dob: undefined,
      address: "",
      disability: false,
      adhaar_card: "",
      pan_card: "",
    },
  });

  // const formOptions = useMemo(() => {
  //   const item = StatesAndDistrict.find((item) => item.state === selectedState);
  //   return item ? item.districts : [];
  // }, [selectedState]);

  // const handleStateChange = (value: string) => {
  //   setSelectedState(value);
  //   form.setValue("state", value);
  //   form.setValue("district", ""); // Reset district when state changes
  // };

  const handleDatePicker = (value?: Date) => {
    setDate(value);
    form.setValue("dob", value);
  };

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-around py-8 px-6">
      <Image src="/odopLogo.png" width={200} height={100} className="mb-8" alt="odopLogo" />
      <div className="w-full flex flex-col items-start">
        <h4 className="text-slate-400 text-2xl font-semibold tracking-tight mb-4">
          {currentStep < 3 ? `0${currentStep}` : "03"}
        </h4>
        <h1 className="text-3xl mb-2 font-semibold tracking-tight lg:text-5xl">
          {currentStep === 1
            ? "Personal Information"
            : currentStep === 2
              ? "Additional Details"
              : "Documents"}
        </h1>
        <p className="text-md text-slate-500 mb-8">
          {currentStep === 1 && "Fill in your basic details below."}
          {currentStep === 2 && "Provide additional information about yourself."}
          {currentStep === 3 && "Upload the required documents."}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
            {currentStep === 1 && (
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={handleDatePicker} initialFocus />
                    </PopoverContent>
                  </Popover>
                )}
              />
            )}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button type="button" onClick={() => setCurrentStep((prev) => prev - 1)}>
                  Previous
                </Button>
              )}
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
