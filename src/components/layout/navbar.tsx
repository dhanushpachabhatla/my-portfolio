"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Code2, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeScan, setActiveScan] = React.useState("");
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            setScrolled(window.scrollY > 20);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveScan(`#${section}`);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/40 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] supports-[backdrop-filter]:bg-background/40"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between px-4 md:px-8">
                <Link
                    href="#hero"
                    onClick={(e) => scrollToSection(e, "#hero")}
                    className="flex items-center gap-2 group relative z-50"
                >
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                        <Code2 className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-bold font-heading tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
                        Pachabhatla Dhanush
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                    {navItems.map((item) => {
                        const isActive = activeScan === item.href;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navIndicator"
                                        className="absolute inset-0 border border-primary/20 bg-primary/5 rounded-full -z-10 shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4 z-50">
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-3 border-r border-border/50 pr-4">
                            {[
                                { icon: Github, href: "https://github.com/dhanushpachabhatla" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/dhanushpachabhatla/" },
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                                >
                                    <social.icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        className="md:hidden hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 right-0 border-b border-primary/10 bg-background/95 backdrop-blur-2xl shadow-xl"
                    >
                        <div className="container px-4 py-6 flex flex-col gap-2">
                            {navItems.map((item, idx) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className={cn(
                                        "block px-4 py-3 text-sm font-medium rounded-xl transition-all",
                                        activeScan === item.href
                                            ? "text-primary bg-primary/10 border border-primary/20"
                                            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground border border-transparent"
                                    )}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-4 pt-4 px-4 mt-2 border-t border-border/50"
                            >
                                <Link href="https://github.com/dhanushpachabhatla" target="_blank" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                                    <Github className="h-5 w-5" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/dhanushpachabhatla/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
