import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center md:py-32">
        <span className="rounded-full border border-fd-border bg-fd-muted px-4 py-1.5 text-sm text-fd-muted-foreground">
          HWP to Markdown, Typst, LaTeX
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
          HWP 문서를
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            어디서든 읽는다
          </span>
        </h1>
        <p className="max-w-xl text-lg text-fd-muted-foreground">
          Rust로 만든 초고속 HWP 파서. Python, CLI, MarkItDown, Claude Code에서
          표, 수식, 이미지까지 정확하게 변환합니다.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-6 py-2.5 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
          >
            시작하기
          </Link>
          <Link
            href="/docs/pricing"
            className="rounded-lg border border-fd-border px-6 py-2.5 text-sm font-medium transition hover:bg-fd-muted"
          >
            요금제
          </Link>
        </div>
      </section>

      {/* Code preview */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-lg">
          <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-yellow-400" />
            <span className="size-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-fd-muted-foreground">Terminal</span>
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
            <code>
              <span className="text-fd-muted-foreground">$</span>{' '}
              <span className="text-blue-400">docpler</span> cat report.hwp{'\n'}
              {'\n'}
              <span className="text-fd-muted-foreground">{'  '}# 2024년 예산 보고서</span>{'\n'}
              {'\n'}
              <span className="text-fd-muted-foreground">{'  '}| 항목 | 예산 | 집행 |</span>{'\n'}
              <span className="text-fd-muted-foreground">{'  '}|------|------|------|</span>{'\n'}
              <span className="text-fd-muted-foreground">{'  '}| 인건비 | 500 | 480 |</span>{'\n'}
              <span className="text-fd-muted-foreground">{'  '}| 운영비 | 200 | 195 |</span>{'\n'}
            </code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-fd-border bg-fd-muted/30 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <Feature
            title="빠름"
            desc="네이티브 Rust 엔진. 수백 페이지 문서도 밀리초 단위로 변환."
            icon="M13 10V3L4 14h7v7l9-11h-7z"
          />
          <Feature
            title="정확함"
            desc="표, 중첩표, 수식, 이미지, 글상자. HWP 5.0 콘텐츠를 빠짐없이 파싱."
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <Feature
            title="다양한 출력"
            desc="Markdown, Typst, LaTeX, ZIP 번들. 원하는 형식으로 바로 내보내기."
            icon="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </div>
      </section>

      {/* Free vs Pro */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Free로 시작, Pro로 확장</h2>
          <p className="mt-3 text-fd-muted-foreground">
            Free로 기본 변환을 바로 사용하세요. 이미지, 중첩표, Typst/LaTeX가 필요하면 Pro로.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <PlanCard
            plan="Free"
            price="무료"
            features={[
              '문단, 표, 수식, 글상자',
              'Python / CLI / MarkItDown',
              'Claude Code / Codex 플러그인',
              '터미널 미리보기 (cat)',
            ]}
            cta="시작하기"
            href="/docs/installation/python"
          />
          <PlanCard
            plan="Pro"
            price="유료"
            highlight
            features={[
              'Free의 모든 기능',
              '중첩표 (HTML)',
              '이미지 추출',
              '정밀 Markdown (LaTeX 수식)',
              'Typst / LaTeX 출력',
              'ZIP 번들',
              'Markdown → HWP',
            ]}
            cta="자세히 보기"
            href="/docs/pricing"
          />
        </div>
      </section>

      {/* Integrations */}
      <section className="border-t border-fd-border bg-fd-muted/30 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">어디서든 사용</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-fd-muted-foreground">
            {['Python', 'CLI', 'MarkItDown', 'Claude Code', 'Codex'].map((name) => (
              <span
                key={name}
                className="rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">지금 바로 시작하세요</h2>
        <pre className="rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm">
          pip install docpler
        </pre>
        <Link
          href="/docs"
          className="mt-2 text-sm font-medium text-fd-primary underline-offset-4 hover:underline"
        >
          문서 보기 &rarr;
        </Link>
      </section>
    </main>
  );
}

function Feature({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex size-10 items-center justify-center rounded-lg border border-fd-border bg-fd-card">
        <svg className="size-5 text-fd-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-fd-muted-foreground">{desc}</p>
    </div>
  );
}

function PlanCard({
  plan,
  price,
  features,
  cta,
  href,
  highlight,
}: {
  plan: string;
  price: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-xl border p-6 ${
        highlight
          ? 'border-fd-primary bg-fd-primary/5 shadow-md'
          : 'border-fd-border bg-fd-card'
      }`}
    >
      <h3 className="text-lg font-bold">{plan}</h3>
      <p className="mt-1 text-2xl font-extrabold">{price}</p>
      <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <svg className="mt-0.5 size-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition ${
          highlight
            ? 'bg-fd-primary text-fd-primary-foreground hover:opacity-90'
            : 'border border-fd-border hover:bg-fd-muted'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
