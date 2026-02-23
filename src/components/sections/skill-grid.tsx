"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
    { name: "Python", level: 95, color: "bg-[#3776AB]", shadow: "shadow-[#3776AB]" },
    { name: "React / Next.js", level: 90, color: "bg-[#61DAFB]", shadow: "shadow-[#61DAFB]" },
    { name: "PyTorch", level: 85, color: "bg-[#EE4C2C]", shadow: "shadow-[#EE4C2C]" },
    { name: "TensorFlow", level: 80, color: "bg-[#FF6F00]", shadow: "shadow-[#FF6F00]" },
    { name: "Node.js / Express", level: 85, color: "bg-[#339933]", shadow: "shadow-[#339933]" },
    { name: "MongoDB", level: 85, color: "bg-[#47A248]", shadow: "shadow-[#47A248]" },
    { name: "TypeScript", level: 85, color: "bg-[#3178C6]", shadow: "shadow-[#3178C6]" },
    { name: "Langchain / RAG", level: 90, color: "bg-[#00A67E]", shadow: "shadow-[#00A67E]" },
    { name: "Tailwind CSS", level: 95, color: "bg-[#38B2AC]", shadow: "shadow-[#38B2AC]" },
    { name: "Neo4j / GraphDB", level: 80, color: "bg-[#008CC1]", shadow: "shadow-[#008CC1]" },
    { name: "Docker", level: 75, color: "bg-[#2496ED]", shadow: "shadow-[#2496ED]" },
    { name: "FastAPI", level: 85, color: "bg-[#009688]", shadow: "shadow-[#009688]" }
];

export function SkillGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {skills.map((item, index) => (
                <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="group relative"
                >
                    {/* Glowing Backdrop (Reduced) */}
                    <div className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl",
                        item.color
                    )} />

                    {/* Card container */}
                    <div className="relative h-full flex flex-col justify-between p-5 rounded-2xl bg-card border border-border/40 group-hover:border-primary/20 group-hover:bg-card/80 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                        {/* Top layout */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-heading font-medium tracking-wide text-foreground/90 group-hover:text-primary transition-colors duration-300">
                                {item.name}
                            </span>
                            {/* Color Dot indicator */}
                            <div className={cn("w-2 h-2 rounded-full", item.color, "opacity-70 group-hover:opacity-100 transition-all duration-300", item.shadow)} />
                        </div>

                        {/* Animated progress bar */}
                        <div className="w-full h-1.5 bg-background/50 rounded-full overflow-hidden mt-auto">
                            <motion.div
                                className={cn("h-full rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300", item.color)}
                                initial={{ width: "0%" }}
                                whileInView={{ width: `${item.level}%` }}
                                transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
