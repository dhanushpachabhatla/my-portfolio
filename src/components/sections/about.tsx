"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Code2, Database, Layout, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="container px-4 md:px-6">
                <ScrollAnimation>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 tracking-tight text-center">
                        Beyond the <span className="text-gradient">Code</span>
                    </h2>
                </ScrollAnimation>

                <BentoGrid className="max-w-4xl mx-auto">
                    <BentoGridItem
                        title="Frontend Mastery"
                        description="Crafting responsive, pixel-perfect interfaces with React, Next.js, and Tailwind."
                        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />}
                        icon={<Layout className="h-4 w-4 text-neutral-500" />}
                        className="md:col-span-2"
                    />
                    <BentoGridItem
                        title="Backend Systems"
                        description="Building robust APIs and managing databases with Node.js and PostgreSQL."
                        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />}
                        icon={<Database className="h-4 w-4 text-neutral-500" />}
                        className="md:col-span-1"
                    />
                    <BentoGridItem
                        title="DevOps & Tools"
                        description="Streamlining deployment with Docker, CI/CD, and Cloud platforms."
                        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />}
                        icon={<Terminal className="h-4 w-4 text-neutral-500" />}
                        className="md:col-span-1"
                    />
                    <BentoGridItem
                        title="Clean Code"
                        description="Writing maintainable, scalable, and self-documenting code."
                        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />}
                        icon={<Code2 className="h-4 w-4 text-neutral-500" />}
                        className="md:col-span-2"
                    />
                </BentoGrid>

                <div className="mt-16 text-center">
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        I strictly follow best practices and modern development standards.
                        My tech stack includes the latest and greatest tools in the ecosystem.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker", "AWS"].map((skill) => (
                            <Badge key={skill} variant="outline" className="text-base py-1 px-4">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
