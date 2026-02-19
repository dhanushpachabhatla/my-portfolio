"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <ScrollAnimation>
                    <div className="mb-16 md:text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                            Get in <span className="text-gradient">Touch</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                            Fill out the form below and I&apos;ll get back to you as soon as possible.
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                    <div className="max-w-lg mx-auto">
                        <ContactForm />
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
