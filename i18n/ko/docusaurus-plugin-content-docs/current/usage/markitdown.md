---
sidebar_position: 3
---

# MarkItDown

## 기본 사용법

```python
from markitdown import MarkItDown

md = MarkItDown(enable_plugins=True)
result = md.convert("document.hwp")
print(result.text_content)
```

:::note
`enable_plugins=True`가 필요합니다.
:::

## 다른 포맷과 함께 사용

MarkItDown은 다양한 포맷을 지원합니다. `markitdown-hwp`를 설치하면 PDF, DOCX, PPTX 등과 함께 HWP 파일도 자동으로 처리됩니다.

```python
md = MarkItDown(enable_plugins=True)

# 모두 동작합니다
md.convert("report.hwp")
md.convert("slides.pptx")
md.convert("paper.pdf")
```

## 파일 감지

플러그인은 다음으로 HWP 파일을 인식합니다:
- 파일 확장자: `.hwp`
- MIME 타입: `application/x-hwp`, `application/haansofthwp`, `application/vnd.hancom.hwp`
