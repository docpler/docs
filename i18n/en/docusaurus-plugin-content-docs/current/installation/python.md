---
sidebar_position: 1
---

# Python

## Requirements

- Python 3.9+

## Install from PyPI

```bash
pip install docpler
```

## Supported Platforms

| Platform | Architecture |
|----------|-------------|
| macOS | ARM (Apple Silicon) |
| macOS | x86_64 (Intel) |
| Linux | x86_64 |
| Windows | x86_64 |

## Verify Installation

```python
from docpler.hwp import convert
print(convert("document.hwp"))
```
