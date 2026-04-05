---
sidebar_position: 2
---

# OpenAI Codex

docpler CLI를 설치하면 [OpenAI Codex](https://openai.com/codex)에서 HWP 파일을 읽을 수 있습니다.

## CLI 설치

먼저 docpler CLI를 설치하세요:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="mac" label="macOS" default>

```bash
brew install docpler/tap/docpler
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```powershell
scoop bucket add docpler https://github.com/docpler/scoop-bucket
scoop install docpler
```

  </TabItem>
  <TabItem value="linux" label="Linux">

```bash
curl -fsSL https://github.com/docpler/docpler-cli/releases/latest/download/docpler-x86_64-unknown-linux-gnu -o /usr/local/bin/docpler
chmod +x /usr/local/bin/docpler
```

  </TabItem>
</Tabs>

## 사용법

CLI 설치 후 Codex에게 HWP 파일을 읽어달라고 요청하세요:

```
> docpler convert 로 report.hwp 를 읽고 요약해줘
```

Codex가 `docpler convert`를 사용해서 파일을 변환하고 Markdown 내용을 반환합니다.
