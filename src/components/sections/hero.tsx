"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <section
            id="hero"
            ref={targetRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full bg-background">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-float opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px] animate-float opacity-50" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        style={{ opacity, scale }}
                        className="flex flex-col gap-6 order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-fit"
                        >
                            <div className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                                Available for new opportunities
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter"
                        >
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                                Digital Magic
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-[600px] text-lg text-muted-foreground sm:text-xl leading-relaxed"
                        >
                            I&apos;m a Full Stack Developer who bridges the gap between chaos and code.
                            I craft pixel-perfect, accessible, and performant web experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95 group">
                                <Link href="#projects">
                                    View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base border-white/10 glass hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                                <Link href="#contact">Contact Me</Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex gap-6 pt-8 items-center"
                        >
                            <SocialLink href="https://github.com" icon={<Github className="h-6 w-6" />} />
                            <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-6 w-6" />} />
                            <SocialLink href="mailto:hello@example.com" icon={<Mail className="h-6 w-6" />} />
                        </motion.div>
                    </motion.div>

                    {/* Photo / Visual */}
                    <motion.div
                        style={{ y }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]"
                        >
                            {/* Creative Frame Elements */}
                            <div className="absolute inset-0 border-2 border-primary/30 rounded-[2rem] rotate-6 scale-105 z-0" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-[2rem] -rotate-3 scale-105 blur-xl z-0" />

                            {/* Photo Container */}
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 glass-card shadow-2xl z-10 group">
                                <Image
                                    src="/dhanush_photo.jpg"
                                    alt="Dhanush"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium">Hello, I&apos;m Dhanush!</p>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <FloatingBadge delay={0.5} className="absolute -top-6 -right-6 z-20 bg-background/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl">
                                <span className="text-2xl">🚀</span>
                            </FloatingBadge>
                            <FloatingBadge delay={1} className="absolute -bottom-8 -left-8 z-20 bg-background/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl">
                                <span className="text-2xl">⚡</span>
                            </FloatingBadge>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link
            href={href}
            target="_blank"
            className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-primary/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
        >
            {icon}
        </Link>
    );
}

function FloatingBadge({ children, className, delay }: { children: React.ReactNode; className?: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
