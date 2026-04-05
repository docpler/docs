---
slug: /
sidebar_position: 1
---

# Introduction

**docpler** is a high-performance document conversion tool that transforms HWP files into clean Markdown.

[HWP](https://en.wikipedia.org/wiki/Hangul_(word_processor)) is the native document format of **Hangul Word Processor** by [Hancom](https://www.hancom.com/), the most widely used word processor in South Korea. HWP files are commonly found in Korean government agencies, courts, public institutions, legal firms, and academic settings.

## Features

- **Fast** — Powered by a native Rust engine, not a slow wrapper or emulator
- **Accurate** — Parses paragraphs, tables, equations, and text boxes from HWP 5.0 files
- **Flexible** — Available as a Python library, CLI tool, MarkItDown plugin, and AI coding agent plugins
- **Cross-platform** — Supports macOS (ARM & Intel), Linux, and Windows

## Quick Start

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python" default>

```bash
pip install docpler
```

```python
from docpler.hwp import convert
print(convert("document.hwp"))
```

  </TabItem>
  <TabItem value="cli" label="CLI">

```bash
brew install docpler/tap/docpler
```

```bash
docpler convert document.hwp
```

  </TabItem>
  <TabItem value="markitdown" label="MarkItDown">

```bash
pip install markitdown-hwp
```

```python
from markitdown import MarkItDown
md = MarkItDown(enable_plugins=True)
result = md.convert("document.hwp")
print(result.text_content)
```

  </TabItem>
  <TabItem value="claude" label="Claude Code">

```
/plugin marketplace add docpler/docpler-claude-plugin
/plugin install docpler@docpler
```

```
> Please read and summarize report.hwp
```

  </TabItem>
  <TabItem value="codex" label="Codex">

Install CLI, then use in Codex:

```bash
brew install docpler/tap/docpler
```

```
> Read and summarize report.hwp using docpler convert
```

  </TabItem>
</Tabs>

## Demo

Try it online at [Hugging Face Spaces](https://huggingface.co/spaces/rightstack/docpler) — no installation required.
