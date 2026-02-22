"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Code2, Database, Layout, Terminal, Heart, Zap } from "lucide-react";
import { SkillGrid } from "@/components/sections/skill-grid";

export function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 mb-20 items-center">
                    {/* Left: Section Header */}
                    <ScrollAnimation>
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight leading-[1.1]">
                                Engineering <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                                    with Purpose.
                                </span>
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full" />
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I am deeply focused on designing and building intelligent AI applications. I excel in creating scalable systems across the entire stack—seamlessly integrating cutting-edge machine learning models into robust full-stack products.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Beyond engineering, I am passionate about advancing Agentic AI systems and contributing to impactful research, such as deepfake detection and drug discovery.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Right: Core Values/Bento */}
                    <ScrollAnimation delay={0.2} className="w-full">
                        <BentoGrid className="lg:max-w-none">
                            <BentoGridItem
                                title="Generative AI & LLMs"
                                description="Developing agentic architectures, complex RAG pipelines, and conversational interfaces."
                                header={<GradientHeader className="from-blue-500/20 to-cyan-500/20" />}
                                icon={<Zap className="h-5 w-5 text-cyan-400" />}
                                className="md:col-span-2 shadow-lg hover:shadow-cyan-500/10"
                            />
                            <BentoGridItem
                                title="Deep Learning"
                                description="Training custom GANs and Transformer models for specialized use cases."
                                header={<GradientHeader className="from-emerald-500/20 to-teal-500/20" />}
                                icon={<Database className="h-5 w-5 text-teal-400" />}
                                className="md:col-span-1 shadow-lg hover:shadow-teal-500/10"
                            />
                            <BentoGridItem
                                title="Full-Stack Engineering"
                                description="Building robust web applications using React, Next.js, FastAPI, and Node.js."
                                header={<GradientHeader className="from-orange-500/20 to-rose-500/20" />}
                                icon={<Layout className="h-5 w-5 text-rose-400" />}
                                className="md:col-span-1 shadow-lg hover:shadow-rose-500/10"
                            />
                            <BentoGridItem
                                title="Data & MLOps"
                                description="Managing vector databases, knowledge graphs, and scalable model deployment."
                                header={<GradientHeader className="from-purple-500/20 to-indigo-500/20" />}
                                icon={<Terminal className="h-5 w-5 text-indigo-400" />}
                                className="md:col-span-2 shadow-lg hover:shadow-indigo-500/10"
                            />
                        </BentoGrid>
                    </ScrollAnimation>
                </div>

                {/* Tech Stack Section */}
                <ScrollAnimation delay={0.4}>
                    <div className="pt-16 border-t border-border/50">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                            <div className="space-y-2 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold font-heading">
                                    Technical Arsenal
                                </h3>
                                <p className="text-muted-foreground max-w-xl">
                                    The tools and technologies I leverage to build production-grade applications.
                                </p>
                            </div>
                            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <Code2 className="h-4 w-4" /> Always Learning
                            </div>
                        </div>

                        <SkillGrid />
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}

function GradientHeader({ className }: { className?: string }) {
    return (
        <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${className} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
            {/* Overlay pattern for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:10px_10px]" />
        </div>
    )
}
