import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24", className)}
                {...props}
            >
                {container ? (
                    <div className="container px-4 md:px-6">{props.children}</div>
                ) : (
                    props.children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
