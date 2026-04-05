'use client';

import { useState } from 'react';

interface IconTabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 256 255" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="py1" x1="12.96%" y1="12.07%" x2="79.64%" y2="78.8%">
          <stop offset="0%" stopColor="#387EB8"/>
          <stop offset="100%" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="py2" x1="19.13%" y1="20.58%" x2="90.38%" y2="88.16%">
          <stop offset="0%" stopColor="#FFE052"/>
          <stop offset="100%" stopColor="#FFC331"/>
        </linearGradient>
      </defs>
      <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#py1)"/>
      <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#py2)"/>
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  );
}

function MarkItDownIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M4.709 15.955l4.72-2.756.08-.046-.08-.139-2.347-4.09a.543.543 0 0 0-.937 0L2.12 15.86a.558.558 0 0 0 .469.862h1.652c.197 0 .38-.104.469-.278v-.49zM13.495 3.2l-5.394 9.4a.543.543 0 0 0 .468.813h10.862a.543.543 0 0 0 .469-.813L14.432 3.2a.543.543 0 0 0-.937 0z"/>
    </svg>
  );
}

function CodexIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}

const tabs: IconTabItem[] = [
  { id: 'python', label: 'Python', icon: <PythonIcon /> },
  { id: 'cli', label: 'CLI', icon: <TerminalIcon /> },
  { id: 'markitdown', label: 'MarkItDown', icon: <MarkItDownIcon /> },
  { id: 'claude', label: 'Claude Code', icon: <ClaudeIcon /> },
  { id: 'codex', label: 'Codex', icon: <CodexIcon /> },
];

export function IconTabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState('python');
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div>
      <div className="flex gap-1 border-b border-fd-border mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              active === tab.id
                ? 'border-fd-primary text-fd-primary'
                : 'border-transparent text-fd-muted-foreground hover:text-fd-foreground'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      {childArray.map((child, i) => (
        <div key={tabs[i]?.id ?? i} className={tabs[i]?.id === active ? '' : 'hidden'}>
          {child}
        </div>
      ))}
    </div>
  );
}

export function IconTabPanel({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
