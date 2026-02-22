import Link from "next/link";
import { Github, Linkedin, Twitter, Rocket } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-primary/10 bg-background overflow-hidden overflow-y-hidden">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container flex flex-col items-center justify-between gap-6 py-12 md:h-32 md:flex-row md:py-0 px-4 md:px-8">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <div className="flex items-center gap-2 text-foreground/80 font-heading font-semibold text-lg">
                        <Rocket className="h-5 w-5 text-primary" />
                        Pachabhatla Dhanush
                    </div>
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        Designed with precision.{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-foreground/80 hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
                        >
                            Open Source
                        </a>
                        .
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/dhanushpachabhatla" target="_blank" rel="noreferrer" className="group p-2 rounded-full border border-border/50 bg-background hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                        <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/dhanushpachabhatla/" target="_blank" rel="noreferrer" className="group p-2 rounded-full border border-border/50 bg-background hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                        <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
            {/* Absolute decorative gradient blob at bottom */}
            <div className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] -z-10 pointer-events-none" />
        </footer>
    );
}
