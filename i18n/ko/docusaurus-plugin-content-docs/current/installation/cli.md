---
sidebar_position: 2
---

# CLI

docpler CLI는 독립 실행형 네이티브 바이너리입니다. Python이나 별도 런타임이 필요 없습니다.

## macOS (Homebrew)

```bash
brew install docpler/tap/docpler
```

## Windows (Scoop)

```powershell
scoop bucket add docpler https://github.com/docpler/scoop-bucket
scoop install docpler
```

## 직접 다운로드

[GitHub Releases](https://github.com/docpler/docpler-cli/releases)에서 플랫폼에 맞는 바이너리를 다운로드하세요.

| 플랫폼 | 바이너리 |
|--------|---------|
| macOS ARM | `docpler-aarch64-apple-darwin` |
| macOS Intel | `docpler-x86_64-apple-darwin` |
| Linux x86_64 | `docpler-x86_64-unknown-linux-gnu` |
| Windows x86_64 | `docpler-x86_64-pc-windows-msvc.exe` |

### 예시 (macOS ARM)

```bash
curl -fsSL https://github.com/docpler/docpler-cli/releases/latest/download/docpler-aarch64-apple-darwin -o /usr/local/bin/docpler
chmod +x /usr/local/bin/docpler
```

## 설치 확인

```bash
docpler --version
```
