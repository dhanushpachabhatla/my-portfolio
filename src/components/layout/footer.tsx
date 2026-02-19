import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            You
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="#" target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" target="_blank" rel="noreferrer">
                        <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" target="_blank" rel="noreferrer">
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
