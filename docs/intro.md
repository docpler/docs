---
slug: /
sidebar_position: 1
---

# 소개

**Docpler**는 HWP 파일을 Markdown으로 변환하는 고성능 문서 변환 도구입니다.

[HWP](https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B8%80_(%EC%9B%8C%EB%93%9C_%ED%94%84%EB%A1%9C%EC%84%B8%EC%84%9C))는 [한글과컴퓨터](https://www.hancom.com/)의 한글 워드프로세서 고유 문서 형식으로, 한국의 정부 기관, 법원, 공공기관, 법률 사무소, 학계에서 널리 사용됩니다.

## 특징

- **빠름** — 네이티브 Rust 엔진 기반, 느린 래퍼나 에뮬레이터가 아님
- **정확함** — HWP 5.0 파일에서 문단, 표, 수식, 글상자를 정확하게 파싱
- **유연함** — Python 라이브러리, CLI 도구, MarkItDown 플러그인, AI 코딩 에이전트 플러그인으로 제공
- **크로스 플랫폼** — macOS (ARM & Intel), Linux, Windows 지원

## 빠른 시작

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
> report.hwp 파일을 읽고 요약해줘
```

  </TabItem>
  <TabItem value="codex" label="Codex">

CLI 설치 후 Codex에서 바로 사용:

```bash
brew install docpler/tap/docpler
```

```
> docpler convert 로 report.hwp 를 읽고 요약해줘
```

  </TabItem>
</Tabs>

## 데모

설치 없이 [Hugging Face Spaces](https://huggingface.co/spaces/rightstack/docpler)에서 바로 사용해보세요.
