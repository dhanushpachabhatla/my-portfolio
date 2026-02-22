"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Conditional Molecule Generation",
        description: "A GAN-based molecular generation framework supporting both conditional and unconditional molecule synthesis using SMILES, trained on a large-scale dataset of 500,000+ molecules.",
        tags: ["PyTorch", "GANs", "Transformers", "RDKit"],
        github: "https://github.com/dhanushpachabhatla",
        demo: "#",
        color: "from-purple-500/20 to-indigo-500/20",
        border: "group-hover:border-indigo-500/50",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]",
        size: "md:col-span-2 lg:col-span-2 row-span-2",
        featured: true,
    },
    {
        title: "Agentic Clinical DSS",
        description: "An end-to-end AI system converting unstructured medical reports into structured clinical knowledge using an agentic RAG architecture and entity-centric embeddings.",
        tags: ["NLP", "Pinecone", "LLMs"],
        github: "https://github.com/dhanushpachabhatla",
        demo: "#",
        color: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-cyan-500/50",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)]",
        size: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Agentic Startup Assistant",
        description: "Autonomous multi-agent research assistant utilizing tool-using LLM agents to analyze startups, markets, and funding trends through structured planning.",
        tags: ["LangChain", "Multi-Agent"],
        github: "https://github.com/dhanushpachabhatla",
        demo: "#",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "group-hover:border-teal-500/50",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)]",
        size: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "DeepFake Video Detection",
        description: "A robust DeepFake detection system built with a CNN-BiLSTM architecture (ResNet-50 and temporal modeling), achieving 91.26% validation accuracy.",
        tags: ["PyTorch", "ResNet-50", "BiLSTM"],
        github: "https://github.com/dhanushpachabhatla",
        demo: "#",
        color: "from-orange-500/20 to-rose-500/20",
        border: "group-hover:border-rose-500/50",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.5)]",
        size: "md:col-span-2 lg:col-span-2",
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Ambient Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-8">
                <ScrollAnimation>
                    <div className="flex flex-col items-center justify-center mb-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                            <Sparkles className="h-4 w-4" /> Selected Works
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-foreground/90">
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Experiences</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg max-w-[600px]">
                            A curated selection of my recent technical achievements and creative explorations.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <TiltCard key={index} index={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TiltCard({ project, index }: { project: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <ScrollAnimation delay={index * 0.1} className={cn("h-full", project.size)}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className={cn(
                    "relative h-full w-full rounded-3xl p-[1px] group perspective-[1000px]",
                    project.glow
                )}
            >
                {/* Outer glowing gradient border */}
                <div className={cn("absolute inset-0 rounded-3xl bg-gradient-to-br opacity-50 transition-all duration-500", project.color, project.border)} />

                {/* Inner Card */}
                <div
                    style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
                    className="relative h-full rounded-[23px] bg-card/40 backdrop-blur-xl border border-white/5 p-8 flex flex-col overflow-hidden transition-colors duration-500 group-hover:bg-card/60"
                >
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
                        {project.featured && (
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-4 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                                Featured Project
                            </div>
                        )}
                        <h3 className="text-2xl lg:text-3xl font-bold font-heading mb-4 text-foreground/90 group-hover:text-primary transition-colors duration-300 tracking-tight">
                            {project.title}
                        </h3>
                    </div>

                    <p style={{ transform: "translateZ(20px)" }} className="text-muted-foreground/90 mb-6 font-light leading-relaxed max-w-xl">
                        {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div style={{ transform: "translateZ(30px)" }} className="flex flex-wrap gap-2 mt-auto pt-4">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-muted-foreground group-hover:border-white/[0.1] transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ transform: "translateZ(50px)" }} className="absolute bottom-8 right-8 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <Link href={project.github} className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-white/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-xl">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={project.demo} className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-white/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-xl">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Live Demo</span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </ScrollAnimation>
    );
}
