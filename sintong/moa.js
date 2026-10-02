// 서울시 모아타운 대상지 — 조사일 2026-10-02
// 전체(약 122곳) 중 송파·동남권과 SH 참여형, 관리계획 승인 확인분 위주로 수록. 나머지는 추후 보강.
// 출처: 서울시 모아주택·모아타운 아카이브(동남권, 2026.5.8 수정), 서울시보, 뉴데일리·아시아경제 2026.2.27 등
window.MOA_SUMMARY = {
  asOf: "2026. 10.",
  total: "122",
  planned: "",
  note: "서울시 누적 약 122곳(2026. 1. 기준, 뉴데일리 2026.2.27) 중 주요 대상지만 수록"
};
window.MOA_ROUNDS = [
  { date: "2026-02-25", title: "SH 참여 모아타운 선정위원회 (공공관리)", count: 7, method: "공모 · SH 참여",
    sites: ["잠실동 329", "사당동 449", "신월동 480-1", "삼성동 84", "개봉동 20", "개봉2동 304·305"],
    source: "서울시 · 뉴데일리·아시아경제 2026.2.27 (15곳 신청, 동의율 충족 14곳 중 7곳 선정 · 목록 6곳 확인)" },
  { date: "2025", title: "공공기관(SH) 참여 모아타운 대상지 선정", count: 10, method: "공모 · SH 참여",
    sites: ["등촌2동 515-44", "등촌2동 520-3", "풍납동 483-10", "쌍문동 524-87", "쌍문동 494-22", "석관동 334-69", "석관동 261-22", "월계동 534", "응봉동 265", "방학동 618"],
    source: "서울시 미디어허브 「공공기관 참여 모아타운 대상지 10곳 선정」" },
  { date: "2022-06", title: "모아타운 1차 공모 대상지 선정", count: 21, method: "자치구 공모",
    sites: ["면목동", "쌍문동 등 (목록 미수록)"],
    source: "서울시 미디어허브 「면목, 쌍문 등 21곳에 '모아타운' 짓는다」" }
];
window.MOA_SITES = [
  // 송파구
  { gu: "송파구", name: "잠실동 329 일대", stage: "대상지 선정", sh: true, selected: "2026-02-25", plan: "", area: "", households: "", blocks: "",
    note: "SH 공공관리. 권리산정기준일 = 공모 접수일(이후 토지 분할·다세대 전환은 현금청산). 모아타운 내 도로 토지거래허가 예정. 사업면적 최대 4만㎡, 상향 시 임대 기부채납 30%", source: "뉴데일리 2026.2.27", reliability: "언론보도" },
  { gu: "송파구", name: "풍납동 483-10 일대", stage: "관리계획 승인", sh: true, selected: "", plan: "2024-04-18", area: "46,688", households: "930", blocks: "1",
    note: "노후도 약 84%(263동 중 220동). 2025 SH 참여 대상지로 전환, 2026. 2. 기준 조합설립 진행 중(보도)", source: "서울시 모아타운 아카이브(동남권) · 2026.2 보도", reliability: "공식" },
  { gu: "송파구", name: "거여동 555 일대", stage: "관리계획 승인", sh: false, selected: "", plan: "2023-12-28", area: "12,616", households: "", blocks: "3",
    note: "1구역 555-1(4,691㎡)·2구역 564(3,821㎡)·3구역 552-1(3,340㎡)", source: "서울시 모아타운 아카이브(동남권)", reliability: "공식" },
  // 동남권
  { gu: "서초구", name: "방배동 977 일대", stage: "관리계획 승인", sh: false, selected: "", plan: "2023-12-14", area: "7,190", households: "", blocks: "1",
    note: "", source: "서울시 모아타운 아카이브(동남권)", reliability: "공식" },
  { gu: "강동구", name: "둔촌동 77-41 일대", stage: "관리계획 승인", sh: false, selected: "", plan: "2023-12-28", area: "65,327", households: "", blocks: "3",
    note: "", source: "서울시 모아타운 아카이브(동남권)", reliability: "공식" },
  { gu: "강남구", name: "삼성동 84 일대", stage: "대상지 선정", sh: true, selected: "2026-02-25", plan: "", area: "", households: "", blocks: "",
    note: "SH 공공관리 대상지", source: "뉴데일리·아시아경제 2026.2.27", reliability: "언론보도" },
  // 2026 SH 참여 (기타)
  { gu: "동작구", name: "사당동 449 일대", stage: "대상지 선정", sh: true, selected: "2026-02-25", plan: "", area: "", households: "", blocks: "",
    note: "SH 공공관리 대상지", source: "아시아경제 2026.2.27", reliability: "언론보도" },
  { gu: "양천구", name: "신월동 480-1 일대", stage: "대상지 선정", sh: true, selected: "2026-02-25", plan: "", area: "", households: "", blocks: "",
    note: "SH 공공관리 대상지", source: "아시아경제 2026.2.27", reliability: "언론보도" },
  { gu: "구로구", name: "개봉동 20 일대", stage: "대상지 선정", sh: true, selected: "2026-02-25", plan: "", area: "", households: "", blocks: "",
    note: "SH 공공관리 대상지", source: "아시아경제 2026.2.27", reliability: "언론보도" },
  { gu: "구로구", name: "개봉2동 304·305 일대", stage: "대상지 선정", sh: true, selected: "2026-02-25", plan: "", area: "", households: "", blocks: "",
    note: "SH 공공관리 대상지", source: "아시아경제 2026.2.27", reliability: "언론보도" },
  // 2025 SH 참여 10곳 (송파 풍납동 483-10 제외 9곳) — 세부 단계 확인 필요
  { gu: "강서구", name: "등촌2동 515-44 일대", stage: "관리계획 수립 중", sh: true, selected: "2025", plan: "", area: "", households: "", blocks: "",
    note: "SH 참여 10곳 중 하나 · 세부 단계 확인 필요", source: "서울시 미디어허브", reliability: "공식" },
  { gu: "강서구", name: "등촌2동 520-3 일대", stage: "관리계획 수립 중", sh: true, selected: "2025", plan: "", area: "", households: "", blocks: "",
    note: "SH 참여 10곳 중 하나 · 세부 단계 확인 필요", source: "서울시 미디어허브", reliability: "공식" },
  { gu: "도봉구", name: "쌍문동 524-87 일대", stage: "관리계획 수립 중", sh: true, selected: "2025", plan: "", area: "", households: "", blocks: "",
    note: "SH 참여 10곳 중 하나 · 세부 단계 확인 필요", source: "서울시 미디어허브", reliability: "공식" },
  { gu: "도봉구", name: "쌍문동 494-22 일대", stage: "관리계획 수립 중", sh: true, selected: "2025", plan: "", area: "", households: "", blocks: "",
    note: "SH 참여 10곳 중 하나 · 세부 단계 확인 필요", source: "서울시 미디어허브", reliability: "공식" },
  { gu: "성북구", name: "석관동 334-69 일대", stage: "관리계획 승인", sh: true, selected: "2025", plan: "2025-02", area: "", households: "", blocks: "",
    note: "석관동 모아타운(석관1·2구역 약 2,886세대) 관리계획 승인 보도. 지번별 구역 대응은 확인 필요", source: "서울시 미디어허브 · 비공식 블로그(2026)", reliability: "비공식" },
  { gu: "성북구", name: "석관동 261-22 일대", stage: "관리계획 승인", sh: true, selected: "2025", plan: "2025-02", area: "", households: "", blocks: "",
    note: "위와 같은 석관동 모아타운 · 지번별 구역 대응 확인 필요", source: "서울시 미디어허브 · 비공식 블로그(2026)", reliability: "비공식" },
  { gu: "노원구", name: "월계동 534 일대", stage: "관리계획 수립 중", sh: true, selected: "2025", plan: "", area: "", households: "", blocks: "",
    note: "SH 참여 10곳 중 하나 · 세부 단계 확인 필요", source: "서울시 미디어허브", reliability: "공식" },
  { gu: "성동구", name: "응봉동 265 일대", stage: "관리계획 수립 중", sh: true, selected: "2025", plan: "", area: "", households: "", blocks: "",
    note: "SH 참여 10곳 중 하나 · 세부 단계 확인 필요", source: "서울시 미디어허브", reliability: "공식" },
  { gu: "도봉구", name: "방학동 618 일대", stage: "관리계획 수립 중", sh: true, selected: "2025", plan: "", area: "", households: "", blocks: "",
    note: "SH 참여 10곳 중 하나 · 세부 단계 확인 필요", source: "서울시 미디어허브", reliability: "공식" },
  // 기타 관리계획 승인 확인분
  { gu: "강북구", name: "수유동 392-9 일대 (수유동2지역)", stage: "관리계획 승인", sh: false, selected: "", plan: "2026-05-21", area: "", households: "", blocks: "",
    note: "서울시보 제4150호 관리계획 승인 고시", source: "서울시보 2026.5.21", reliability: "공식" }
];
