"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MapPin, Phone, MessageSquarePlus } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container px-4 md:px-8 relative z-10 max-w-7xl mx-auto">
                <ScrollAnimation>
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
                            <MessageSquarePlus className="h-4 w-4" /> Start a Conversation
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-foreground/90 leading-[1.1]">
                            Let&apos;s Build Something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                                Extraordinary
                            </span>
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="grid lg:grid-cols[1fr_1.5fr] gap-12 lg:gap-24">
                    {/* Left: Contact Info */}
                    <ScrollAnimation delay={0.2} className="flex flex-col justify-center">
                        <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
                            Whether you have a specific project in mind, need technical consulting, or just want to connect, I&apos;m always open to discussing new opportunities.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail className="h-6 w-6" />, title: "Email", value: "pachabhatladhanush@gmail.com", link: "mailto:pachabhatladhanush@gmail.com" },
                                { icon: <MapPin className="h-6 w-6" />, title: "Location", value: "Raichur, India", link: null },
                                { icon: <Phone className="h-6 w-6" />, title: "Phone", value: "+91 9392 588 734", link: "tel:+919392588734" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground mb-1">{item.title}</p>
                                        {item.link ? (
                                            <a href={item.link} className="text-lg font-semibold text-foreground/90 hover:text-primary transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-semibold text-foreground/90">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>

                    {/* Right: Form */}
                    <ScrollAnimation delay={0.4}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative rounded-3xl bg-card/40 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
                                <ContactForm />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
