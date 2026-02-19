"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "PostgreSQL", "Framer Motion", "Git",
    "Docker", "AWS", "Figma", "Prisma"
];

export function SkillGrid() {
    return (
        <div className="flex flex-wrap gap-2">
            {skills.map((item, index) => (
                <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                >
                    <Badge variant="secondary" className="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 transition-colors border-white/5">
                        {item}
                    </Badge>
                </motion.div>
            ))}
        </div>
    );
}
