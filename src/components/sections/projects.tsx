"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A comprehensive online store with secure payment integration and real-time inventory management.",
        tags: ["Next.js", "Stripe", "Prisma"],
        github: "#",
        demo: "#",
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "AI Chat Assistant",
        description: "Intelligent chatbot leveraging OpenAI API for natural language understanding and context-aware responses.",
        tags: ["React", "OpenAI", "Tailwind"],
        github: "#",
        demo: "#",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Task Dashboard",
        description: "Collaborative project management tool with drag-and-drop kanban boards and team analytics.",
        tags: ["Vue.js", "Firebase", "Pinia"],
        github: "#",
        demo: "#",
        color: "from-emerald-500 to-teal-500",
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="container px-4 md:px-6">
                <ScrollAnimation>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center tracking-tight">
                        Selected <span className="text-gradient">Works</span>
                    </h2>
                </ScrollAnimation>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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
        <ScrollAnimation delay={index * 0.1}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full rounded-xl bg-gradient-to-br from-white/5 to-white/0 p-[1px] group"
            >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                <div
                    style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                    className="relative h-full rounded-xl bg-card/50 backdrop-blur-xl border border-white/10 p-6 flex flex-col overflow-hidden"
                >
                    {/* Header Color Splash */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />

                    <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary" className="bg-secondary/50">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                        <Button variant="ghost" size="sm" asChild className="hover:text-primary">
                            <Link href={project.github}>
                                <Github className="mr-2 h-4 w-4" /> Code
                            </Link>
                        </Button>
                        <Button size="sm" asChild className="ml-auto bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                            <Link href={project.demo}>
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </ScrollAnimation>
    );
}
