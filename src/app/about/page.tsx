import { Section } from "@/components/ui/section";
import { SkillGrid } from "@/components/sections/skill-grid";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Dev Portfolio",
    description: "Learn more about my background, skills, and experience.",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="pb-8">
                    <h1 className="mb-8 font-heading text-4xl font-bold tracking-tight lg:text-5xl">
                        About Me
                    </h1>
                    <div className="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground">
                        <p className="text-lg leading-relaxed">
                            I am a passionate developer with a keen eye for design. I believe
                            that great software is not just about code, but about the experience
                            it provides. I strive to create intuitive, accessible, and
                            performant interfaces that solve real problems.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            With a background in computer science and years of hands-on
                            experience, I have honed my skills in modern web technologies. I am
                            always learning and exploring new tools to improve my craft.
                        </p>
                    </div>
                </Section>
                <Section className="bg-muted/30 py-16">
                    <h2 className="mb-12 font-heading text-3xl font-bold tracking-tight">
                        Skills & Technologies
                    </h2>
                    <SkillGrid />
                </Section>
                <Section className="py-16">
                    <h2 className="mb-12 font-heading text-3xl font-bold tracking-tight">
                        Work Experience
                    </h2>
                    <ExperienceTimeline />
                </Section>
            </main>
            <Footer />
        </div>
    );
}
