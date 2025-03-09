"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default function AptosBackend() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const message = formData.get('message');

        try {
            const res = await axios.post("/api/messaging", {
                message
            });
            console.log(res);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-[300px]">
                <Input 
                    name="message"
                    id="message"
                    placeholder="Enter Message"
                />
                <Button type="submit" className="mt-4">Submit</Button>
            </form>
        </div>
    );
}