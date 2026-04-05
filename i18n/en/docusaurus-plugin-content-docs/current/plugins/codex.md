---
sidebar_position: 2
---

# OpenAI Codex

The docpler CLI can be used with [OpenAI Codex](https://openai.com/codex) to read HWP files.

## Install CLI

First, install the docpler CLI:

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

## Usage

Once installed, ask Codex to read HWP files:

```
> Read and summarize report.hwp using docpler convert
```

Codex will use `docpler convert` to parse the file and return the Markdown content.
