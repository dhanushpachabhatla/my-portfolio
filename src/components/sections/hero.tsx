"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter, Sparkles, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Smooth Cursor Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
    const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            id="hero"
            ref={targetRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Smooth Cursor Glow */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 w-[250px] h-[250px] bg-primary/20 rounded-full blur-[80px] mix-blend-screen z-0"
                style={{
                    x: smoothMouseX,
                    y: smoothMouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Deep Dynamic Mesh Background */}
            <div className="absolute inset-0 bg-background">
                {/* Radial gradient for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

                {/* Animated glowing orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[130px] mix-blend-screen"
                />

                {/* Subtle grid pattern for texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative z-10 px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div style={{ opacity }} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 order-2 lg:order-1 pt-10 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="w-fit"
                        >
                            <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium backdrop-blur-md transition-all hover:bg-primary/10 cursor-default">
                                <Sparkles className="h-4 w-4 animate-pulse text-primary" />
                                <span>Available for new opportunities</span>
                                {/* Subtle glowing border effect on hover */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)" }} />
                            </div>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-foreground/90"
                            >
                                Crafting Digital <br />
                                <span className="relative inline-block mt-2">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary animate-gradient-x bg-[length:200%_auto]">
                                        Masterpieces.
                                    </span>
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                                className="max-w-[550px] text-lg sm:text-xl text-muted-foreground/90 leading-relaxed font-light"
                            >
                                I&apos;m Pachabhatla Dhanush, a motivated developer with growing expertise in NLP, Generative AI, Deep Learning, and Agentic AI systems alongside Full Stack development.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                            className="flex flex-wrap justify-center lg:justify-start gap-5 pt-2 relative z-20"
                        >
                            <Link href="#projects" className="relative group overflow-hidden rounded-full h-14 p-[1.5px] text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(var(--primary),0.2)] hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] flex items-center">
                                {/* Rotating border effect */}
                                <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(var(--primary))_50%,transparent_100%)] animate-[spin_2s_linear_infinite]" />

                                {/* Inner content container */}
                                <span className="relative flex items-center justify-center h-full w-full rounded-full bg-background px-8 transition-colors duration-300 group-hover:bg-primary/10">
                                    <span className="flex items-center gap-2 text-foreground group-hover:text-primary-foreground transition-colors">
                                        View Projects <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </span>
                            </Link>

                            <Link href="#contact" className="relative group overflow-hidden rounded-full h-14 px-8 text-base font-medium border border-border/40 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-95 text-foreground/80 hover:text-foreground flex items-center hover:border-primary/50 hover:bg-white/[0.05]">
                                <span className="relative z-10 flex items-center gap-2">
                                    Let&apos;s Connect
                                </span>
                                {/* Hover sweep effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-0" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex justify-center lg:justify-start gap-6 mt-6 items-center w-full"
                        >
                            {[
                                { icon: <Github className="h-5 w-5" />, href: "https://github.com/dhanushpachabhatla" },
                                { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/dhanushpachabhatla/" },
                                { icon: <Mail className="h-5 w-5" />, href: "mailto:pachabhatladhanush@gmail.com" },
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-primary/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(var(--primary),0.2)]"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Highly stylized visual/photo */}
                    <motion.div
                        style={{ y }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end relative mt-10 lg:mt-0"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] group"
                        >
                            {/* Layered decorative borders for depth */}
                            <div className="absolute inset-0 border border-primary/20 rounded-[2.5rem] rotate-6 scale-[1.02] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-105" />
                            <div className="absolute inset-0 border border-purple-500/20 rounded-[2.5rem] -rotate-3 scale-[1.05] transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110" />

                            {/* Glowing backdrop */}
                            <div className="absolute inset-2 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                            {/* Main photo container */}
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-background/50 backdrop-blur-sm shadow-2xl z-10 transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                                <Image
                                    src="/dhanush_photo.jpg"
                                    alt="Dhanush"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                    priority
                                />
                                {/* Bottom gradient for text focus */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <p className="text-white font-heading font-semibold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Pachabhatla Dhanush</p>
                                    <p className="text-white/70 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">AI & Full Stack Engineer</p>
                                </div>
                            </div>

                            {/* Floating stylized badges */}
                            <FloatingBadge delay={0.5} className="absolute -top-4 -right-4 z-20">
                                <div className="bg-background/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                                    <CodeIcon />
                                </div>
                            </FloatingBadge>

                            <FloatingBadge delay={1.2} className="absolute -bottom-8 -left-4 z-20">
                                <div className="bg-background/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent" />
                                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                    <span className="text-sm font-medium text-foreground/80 relative z-10">Available</span>
                                </div>
                            </FloatingBadge>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
}

function FloatingBadge({ children, className, delay }: { children: React.ReactNode; className?: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8, delay }}
            className={className}
        >
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, delay: delay * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

function CodeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary relative z-10">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    )
}
