---
sidebar_position: 2
---

# CLI

## 표준 출력으로 변환

```bash
docpler convert document.hwp
```

## 파일로 저장

```bash
docpler convert document.hwp -o output.md
```

## 파이프로 연결

```bash
# 키워드 검색
docpler convert report.hwp | grep "예산"

# 단어 수 세기
docpler convert report.hwp | wc -w
```

## 종료 코드

| 코드 | 의미 |
|------|------|
| 0 | 성공 |
| 1 | 에러 (잘못된 파일, 암호화 등) |
