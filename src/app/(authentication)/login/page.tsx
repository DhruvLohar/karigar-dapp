"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import VerifyOTP from "@/components/custom/VerifyOTP";
import Link from "next/link";
import { login, verifyOTP } from "@/lib/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
});

export default function Login() {
  // email, verify
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("email");
  const [uid, setUid] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await login(values);

    if (res.success) {
      toast(res.message);
      setUid(res.user?.id);
      setCurrentTab("verify");
    }
  }

  async function handleVerifyOTP(otp: string) {
    const res = await verifyOTP(uid, otp);

    toast(res.message);
    if (res.success) {
      router.push("/");
    }
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center px-4">
      <Image
        src={"/odopLogo.png"}
        width={200}
        height={100}
        className="mb-8"
        alt="odopLogo"
      />

      <div className="w-full flex flex-col items-start justify-center">
        <div className="w-full h-[300px] bg-slate-500 my-6"></div>

        <h3 className="scroll-m-20 text-left text-2xl font-bold tracking-tight text-primary mb-2">
          {currentTab === "email" ? "Welcome Back" : "Verify your Email"}
        </h3>
        <p className="text-sm w-full text-slate-500">
          Login in your account with an OTP and experience passwordless login!
        </p>

        {currentTab === "email" ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full my-8 mb-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full py-6 rounded-lg text-md mt-8"
                type="submit"
              >
                Login
              </Button>
            </form>
          </Form>
        ) : (
          <VerifyOTP onVerifySubmit={handleVerifyOTP} />
        )}

        <Link className="w-full" href={"/get-started"}>
          <Button className="w-full py-6 rounded-lg text-md" variant="outline">
            Go Back
          </Button>
        </Link>
      </div>
    </main>
  );
}
