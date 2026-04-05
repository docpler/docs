---
sidebar_position: 1
---

# Python

## 기본 변환

```python
from docpler.hwp import convert

markdown = convert("document.hwp")
print(markdown)
```

## 파일로 저장

```python
from docpler.hwp import convert

markdown = convert("document.hwp")
with open("output.md", "w") as f:
    f.write(markdown)
```

## 지원 콘텐츠

HWP 5.0 파일에서 다음 콘텐츠를 추출합니다:

- **문단** — 서식이 제거된 텍스트
- **표** — Markdown 파이프 테이블로 렌더링
- **수식** — `$$...$$` 블록으로 출력 (HWP EQN 스크립트)
- **글상자** — 문단으로 추출

## 에러 처리

```python
from docpler.hwp import convert

try:
    markdown = convert("document.hwp")
except RuntimeError as e:
    print(f"변환 실패: {e}")
```

주요 에러:
- `Invalid HWP signature` — 유효하지 않은 HWP 파일
- `Password-protected HWP files are not supported` — 암호화된 파일은 지원하지 않음
