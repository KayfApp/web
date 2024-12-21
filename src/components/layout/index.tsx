export function Section({ className = '', children }: { className?: string; children?: React.ReactNode }) {
    return (
        <section className={`flex flex-col items-center w-4/5 py-32 ${className}`}>
            {children}
        </section>
    )
}

export function MarkdownSection({ className = '', children }: { className?: string; children?: React.ReactNode }) {
    return (
        <Section className={`items-stretch space-y-8 ${className}`}>
            {children}
        </Section>
    )
}

export function Main({ className = '', children }: { className?: string, children?: React.ReactNode }) {
    return (
        <main className={`flex w-screen flex-col items-center ${className}`}>
            {children}
        </main>
    )
} 
