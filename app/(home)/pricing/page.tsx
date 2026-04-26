import Link from 'next/link';

const tiers = [
  {
    name: 'Free',
    price: '무료',
    description: '기본 HWP → Markdown 변환',
    features: [
      '문단, 표, 수식, 글상자',
      'Python / CLI / MarkItDown',
      'Claude Code / Codex 플러그인',
      '터미널 미리보기 (cat)',
      '크로스 플랫폼',
    ],
    cta: '시작하기',
    href: '/docs/installation/python',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '유료',
    description: '정밀 변환 + 다양한 출력',
    features: [
      'Free의 모든 기능',
      '중첩표 (HTML)',
      '이미지 추출',
      '정밀 Markdown (LaTeX 수식)',
      'Typst / LaTeX 출력',
      'ZIP 번들',
      'Markdown → HWP',
      '기기 5대',
      '이메일 지원',
    ],
    cta: '문의하기',
    href: 'mailto:support@rightstack.net',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '별도 문의',
    description: '대규모 문서 처리',
    features: [
      'Pro의 모든 기능',
      '병렬 배치 처리',
      '오프라인 라이선스',
      '기기 수 협의',
      '전담 기술 지원',
    ],
    cta: '문의하기',
    href: 'mailto:support@rightstack.net',
    highlight: false,
  },
];

export default function Page() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            요금제
          </h1>
          <p className="mt-4 text-lg text-fd-muted-foreground">
            Free로 시작하고, 필요할 때 업그레이드하세요.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-xl border p-6 ${
                tier.highlight
                  ? 'border-fd-primary bg-fd-primary/5 shadow-lg'
                  : 'border-fd-border bg-fd-card'
              }`}
            >
              <h2 className="text-lg font-bold">{tier.name}</h2>
              <p className="mt-1 text-3xl font-extrabold">{tier.price}</p>
              <p className="mt-2 text-sm text-fd-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 size-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition ${
                  tier.highlight
                    ? 'bg-fd-primary text-fd-primary-foreground hover:opacity-90'
                    : 'border border-fd-border hover:bg-fd-muted'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-2xl">
          <h2 className="text-center text-2xl font-bold">자주 묻는 질문</h2>
          <dl className="mt-8 divide-y divide-fd-border">
            <Faq
              q="Free와 Pro의 차이는 무엇인가요?"
              a="Free는 기본 Markdown 변환을 제공합니다. Pro는 중첩표, 이미지 추출, LaTeX/Typst 출력, HWP 생성 등 고급 기능을 포함합니다."
            />
            <Faq
              q="Python에서 Pro 기능을 사용할 수 있나요?"
              a="현재 Python 바인딩은 Free 기능만 제공합니다. Pro 기능은 CLI를 통해 사용할 수 있습니다."
            />
            <Faq
              q="라이선스는 몇 대에서 사용할 수 있나요?"
              a="Pro는 기본 5대, Enterprise는 협의에 따라 조정됩니다. 30일 미사용 기기는 자동 해제됩니다."
            />
            <Faq
              q="오프라인에서 사용할 수 있나요?"
              a="Pro는 24시간 캐시로 일시적 오프라인 사용이 가능합니다. Enterprise는 완전 오프라인 라이선스를 제공합니다."
            />
          </dl>
        </div>
      </section>
    </main>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="py-5">
      <dt className="font-medium">{q}</dt>
      <dd className="mt-2 text-sm text-fd-muted-foreground">{a}</dd>
    </div>
  );
}
