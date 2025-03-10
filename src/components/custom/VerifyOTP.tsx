"use client"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react";
import { Button } from "../ui/button";

export default function VerifyOTP({ onVerifySubmit }: { onVerifySubmit: (value: string) => void }) {

    const [value, setValue] = useState("")

    return (
        <div className="w-full flex flex-col items-center justify-center my-6">
            <InputOTP
                maxLength={4}
                value={value}
                onChange={(value) => setValue(value)}
            >
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
            </InputOTP>

            <Button
                className="w-full py-6 rounded-lg text-md mt-8"
                onClick={() => onVerifySubmit(value)}
            >Submit</Button>
        </div>
    )
}