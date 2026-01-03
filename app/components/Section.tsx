
// app/components/Section.tsx
import Container from "./Container";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 md:py-20">
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-widest text-blue-700">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black md:text-3xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-3 text-sm text-black/70">{subtitle}</p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
