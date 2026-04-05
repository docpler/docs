---
sidebar_position: 3
---

# MarkItDown 플러그인

[MarkItDown](https://github.com/microsoft/markitdown)은 Microsoft의 문서-Markdown 변환 도구입니다. `markitdown-hwp` 패키지를 설치하면 MarkItDown에서 HWP 파일을 지원합니다.

## 설치

```bash
pip install markitdown-hwp
```

`markitdown`과 `docpler`가 자동으로 설치됩니다.

## 설치 확인

```python
from markitdown import MarkItDown

md = MarkItDown(enable_plugins=True)
result = md.convert("document.hwp")
print(result.text_content)
```

:::note
MarkItDown이 HWP 플러그인을 로드하려면 `enable_plugins=True`가 필요합니다.
:::
