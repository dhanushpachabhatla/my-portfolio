import { ContactForm } from "@/components/sections/contact-form";
import { Section } from "@/components/ui/section";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Dev Portfolio",
    description: "Get in touch with me for collaborations or opportunities.",
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Section className="py-16 md:py-24">
                    <div className="space-y-4 text-center mb-12">
                        <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl">
                            Get in Touch
                        </h1>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                        </p>
                    </div>
                    <ContactForm />
                </Section>
            </main>
            <Footer />
        </div>
    );
}
