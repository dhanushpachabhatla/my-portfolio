"use client";

import { motion } from "framer-motion";

const experience = [
    {
        company: "Tech Corp",
        role: "Senior Frontend Engineer",
        period: "2023 - Present",
        description:
            "Leading the frontend team in rebuilding the core product using Next.js and Tailwind CSS. Improved performance by 40%.",
    },
    {
        company: "Startup Inc",
        role: "Full Stack Developer",
        period: "2021 - 2023",
        description:
            "Built and shipped multiple features for the SaaS platform. Implemented real-time collaboration using WebSockets.",
    },
    {
        company: "Freelance",
        role: "Web Developer",
        period: "2019 - 2021",
        description:
            "Designed and developed custom websites for various clients. Specialized in accessible and responsive design.",
    },
];

export function ExperienceTimeline() {
    return (
        <div className="relative space-y-8 border-l-2 border-muted pl-8 md:pl-12">
            {experience.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <span className="absolute -left-[41px] md:-left-[57px] top-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background ring-4 ring-background">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                        <h3 className="font-heading text-lg font-semibold">
                            {item.role} <span className="text-muted-foreground">at</span>{" "}
                            {item.company}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
