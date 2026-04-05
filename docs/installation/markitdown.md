---
sidebar_position: 3
---

# MarkItDown Plugin

[MarkItDown](https://github.com/microsoft/markitdown) is a document-to-Markdown converter by Microsoft. The `markitdown-hwp` package adds HWP support to MarkItDown.

## Install

```bash
pip install markitdown-hwp
```

This automatically installs `markitdown` and `docpler` as dependencies.

## Verify Installation

```python
from markitdown import MarkItDown

md = MarkItDown(enable_plugins=True)
result = md.convert("document.hwp")
print(result.text_content)
```

:::note
`enable_plugins=True` is required for MarkItDown to load the HWP converter plugin.
:::
