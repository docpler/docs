import Link from 'next/link';

export function FeatureLayout({
  title,
  badge,
  description,
  children,
}: {
  title: string;
  badge?: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-8">
          {badge && (
            <span className="mb-3 inline-block rounded-full border border-fd-border bg-fd-muted px-3 py-1 text-xs font-medium text-fd-muted-foreground">
              {badge}
            </span>
          )}
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-fd-muted-foreground">{description}</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {children}
        </div>

        <div className="mt-12 flex gap-3 border-t border-fd-border pt-8">
          <Link
            href="/docs"
            className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium transition hover:bg-fd-muted"
          >
            문서 보기
          </Link>
          <Link
            href="/docs/installation/python"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
          >
            시작하기
          </Link>
        </div>
      </section>
    </main>
  );
}
