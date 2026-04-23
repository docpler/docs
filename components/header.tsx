'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';

const features = [
  {
    title: '표 변환',
    desc: '표, 중첩표를 정확하게 파싱',
    href: '/docs/features/tables',
  },
  {
    title: '수식 변환',
    desc: 'HWP EQN → LaTeX / Typst',
    href: '/docs/features/equations',
  },
  {
    title: '이미지 추출',
    desc: 'HWP에서 이미지 + 캡션 추출',
    href: '/docs/features/images',
  },
  {
    title: 'Typst / LaTeX',
    desc: 'HWP → Typst, LaTeX 소스 출력',
    href: '/docs/features/typst-latex',
  },
  {
    title: 'HWP 생성',
    desc: 'Markdown → HWP 문서 생성',
    href: '/docs/features/writer',
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fd-border bg-fd-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          Docpler
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* Features dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="rounded-md px-3 py-2 text-sm font-medium text-fd-muted-foreground transition hover:text-fd-foreground">
              Features
            </button>

            {open && (
              <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-2">
                <div className="rounded-xl border border-fd-border bg-fd-card p-3 shadow-xl">
                  {features.map((f) => (
                    <Link
                      key={f.href}
                      href={f.href}
                      className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition hover:bg-fd-muted"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-sm font-medium">{f.title}</span>
                      <span className="text-xs text-fd-muted-foreground">
                        {f.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="rounded-md px-3 py-2 text-sm font-medium text-fd-muted-foreground transition hover:text-fd-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="rounded-md px-3 py-2 text-sm font-medium text-fd-muted-foreground transition hover:text-fd-foreground"
          >
            Docs
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/docpler"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm text-fd-muted-foreground transition hover:text-fd-foreground"
          >
            GitHub
          </a>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
