export default function Section({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <section className={`items-center w-4/5 py-32 ${className}`}>
      {children}
    </section>
  )
}
