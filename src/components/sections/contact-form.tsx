"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-foreground/90 mb-4 tracking-tight">
                Send a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup
                    id="name"
                    label="Full Name"
                    placeholder="John Doe"
                    isFocused={focusedField === "name"}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                />
                <InputGroup
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    isFocused={focusedField === "email"}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                />
            </div>

            <div className="relative pt-2">
                <label className="text-sm font-semibold text-foreground/80 mb-2 block flex items-center gap-2">
                    Message
                    <span className="text-primary">*</span>
                </label>
                <div className="relative group">
                    <div className={cn(
                        "absolute -inset-0.5 rounded-xl blur opacity-0 transition duration-500",
                        focusedField === "message" ? "opacity-30 bg-primary" : "group-hover:opacity-10 bg-white/20"
                    )} />
                    <textarea
                        id="message"
                        required
                        placeholder="Tell me about your project..."
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className="relative w-full min-h-[160px] bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-0 resize-none transition-colors"
                    />
                </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-xl text-base font-semibold bg-primary hover:bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.2)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </span>
                </Button>
            </motion.div>
        </form>
    );
}

function InputGroup({
    id, label, type = "text", placeholder, isFocused, onFocus, onBlur
}: {
    id: string; label: string; type?: string; placeholder: string; isFocused: boolean; onFocus: () => void; onBlur: () => void;
}) {
    return (
        <div className="relative pt-2">
            <label htmlFor={id} className="text-sm font-semibold text-foreground/80 mb-2 block flex items-center gap-2">
                {label}
                <span className="text-primary">*</span>
            </label>
            <div className="relative group">
                <div className={cn(
                    "absolute -inset-0.5 rounded-xl blur opacity-0 transition duration-500",
                    isFocused ? "opacity-30 bg-primary" : "group-hover:opacity-10 bg-white/20"
                )} />
                <input
                    id={id}
                    type={type}
                    required
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="relative w-full h-12 bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-0 transition-colors"
                />
            </div>
        </div>
    );
}
