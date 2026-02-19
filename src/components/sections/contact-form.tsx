"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

export function ContactForm() {
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Here you would add your form submission logic
        console.log("Form submitted");
    }

    return (
        <Card className="glass-card border-white/10 shadow-xl">
            <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none text-foreground/80">Name</label>
                        <Input id="name" placeholder="John Doe" required className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none text-foreground/80">Email</label>
                        <Input id="email" type="email" placeholder="john@example.com" required className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none text-foreground/80">Message</label>
                        <Textarea id="message" placeholder="Your message..." required className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary/50 transition-colors" />
                    </div>
                    <Button type="submit" className="w-full h-11 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                        Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
