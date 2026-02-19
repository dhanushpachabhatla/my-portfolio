import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "lucide-react"; // Wait, Badge is not in lucide. I'll make a makeshift badge or use span
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Dev Portfolio",
    description: "Showcase of my recent projects and experiments.",
};

const projects = [
    {
        title: "Project One",
        description:
            "A responsive e-commerce platform built with Next.js and Stripe integration. Features include intuitive cart management and secure checkout.",
        tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
        github: "#",
        demo: "#",
    },
    {
        title: "Project Two",
        description:
            "Real-time chat application using Socket.io and React. Supports multiple rooms and private messaging.",
        tags: ["React", "Node.js", "Socket.io", "Express"],
        github: "#",
        demo: "#",
    },
    {
        title: "Project Three",
        description:
            "Task management dashboard with drag-and-drop functionality. Optimized for productivity and collaboration.",
        tags: ["Vue.js", "Firebase", "Pinia"],
        github: "#",
        demo: "#",
    },
];

export default function ProjectsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="py-16">
                    <div className="space-y-4 mb-12">
                        <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl">
                            Featured Projects
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-[700px]">
                            A collection of projects exploring different technologies and design patterns.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={project.github} target="_blank">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Link>
                                    </Button>
                                    <Button size="sm" asChild>
                                        <Link href={project.demo} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
