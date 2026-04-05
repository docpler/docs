---
sidebar_position: 2
---

# CLI

The docpler CLI is a standalone native binary — no Python or runtime required.

## macOS (Homebrew)

```bash
brew install docpler/tap/docpler
```

## Windows (Scoop)

```powershell
scoop bucket add docpler https://github.com/docpler/scoop-bucket
scoop install docpler
```

## Manual Download

Download the binary for your platform from [GitHub Releases](https://github.com/docpler/docpler-cli/releases).

| Platform | Binary |
|----------|--------|
| macOS ARM | `docpler-aarch64-apple-darwin` |
| macOS Intel | `docpler-x86_64-apple-darwin` |
| Linux x86_64 | `docpler-x86_64-unknown-linux-gnu` |
| Windows x86_64 | `docpler-x86_64-pc-windows-msvc.exe` |

### Example (macOS ARM)

```bash
curl -fsSL https://github.com/docpler/docpler-cli/releases/latest/download/docpler-aarch64-apple-darwin -o /usr/local/bin/docpler
chmod +x /usr/local/bin/docpler
```

## Verify Installation

```bash
docpler --version
```
