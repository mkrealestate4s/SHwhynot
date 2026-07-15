/* ============================================================
   재개발 사례 데이터베이스 (서울·경기)
   ============================================================
   ▶ 업데이트 방법: GitHub에서 이 파일(redevelopment/districts.js)을
     직접 수정하고 커밋하면 자동으로 사이트에 반영됩니다.
   ▶ 항목 설명
     region     : '서울' | '경기'
     city       : 시·구 (검색 매칭에 사용)
     name       : 구역명
     type       : '재개발' | '재건축' | '공공재개발' 등
     status     : '완료' | '진행'
     stage      : 현재 단계 (진행 구역) / 준공·입주 (완료 구역)
     newName    : 신축 단지명 (완료·확정 구역)
     households : 세대수 (약)
     moveIn     : 입주 연도 (예정 포함)
     prorata    : 비례율 (%) — 확정 고시 확인 후 입력
     unionPrice : 조합원분양가 참고 — 확인 후 입력
     genPrice   : 일반분양가 참고 — 확인 후 입력
     note       : 비고
   ▶ 주의: 세대수·단계는 대략적인 참고값이며 작성 시점(2026년 상반기)
     기준입니다. 비례율·분양가는 반드시 조합 고시문으로 확인하세요.
   ============================================================ */
window.DISTRICT_DB = {
  updated: '2026-07',
  entries: [
    /* ---------------- 서울 · 완료 ---------------- */
    { region: '서울', city: '마포구',   name: '아현3구역(아현뉴타운)',      type: '재개발', status: '완료', stage: '준공',        newName: '마포래미안푸르지오',            households: '약 3,885', moveIn: '2014', prorata: '', unionPrice: '', genPrice: '', note: '마포 대장 단지로 자리잡은 뉴타운 대표 사례' },
    { region: '서울', city: '종로구',   name: '돈의문뉴타운1구역',          type: '재개발', status: '완료', stage: '준공',        newName: '경희궁자이',                    households: '약 2,415', moveIn: '2017', prorata: '', unionPrice: '', genPrice: '', note: '도심 한복판 재개발 성공 사례' },
    { region: '서울', city: '성동구',   name: '왕십리뉴타운2구역',          type: '재개발', status: '완료', stage: '준공',        newName: '센트라스',                      households: '약 2,529', moveIn: '2016', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '성동구',   name: '왕십리뉴타운1·3구역',        type: '재개발', status: '완료', stage: '준공',        newName: '텐즈힐',                        households: '약 3,800', moveIn: '2015~16', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '성동구',   name: '옥수12구역',                 type: '재개발', status: '완료', stage: '준공',        newName: '래미안 옥수 리버젠',            households: '약 1,511', moveIn: '2012', prorata: '', unionPrice: '', genPrice: '', note: '한강변 입지' },
    { region: '서울', city: '동작구',   name: '흑석7구역(흑석뉴타운)',      type: '재개발', status: '완료', stage: '준공',        newName: '아크로리버하임',                households: '약 1,073', moveIn: '2019', prorata: '', unionPrice: '', genPrice: '', note: '한강변 흑석뉴타운 대표 완료 구역' },
    { region: '서울', city: '서대문구', name: '북아현1-2구역',              type: '재개발', status: '완료', stage: '준공',        newName: '신촌그랑자이',                  households: '약 1,248', moveIn: '2020', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '서대문구', name: '북아현1-3구역',              type: '재개발', status: '완료', stage: '준공',        newName: 'e편한세상 신촌',                households: '약 1,910', moveIn: '2017', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '서대문구', name: '가재울뉴타운4구역',          type: '재개발', status: '완료', stage: '준공',        newName: 'DMC파크뷰자이',                 households: '약 4,300', moveIn: '2015', prorata: '', unionPrice: '', genPrice: '', note: '가재울뉴타운 최대 규모' },
    { region: '서울', city: '영등포구', name: '신길7구역(신길뉴타운)',      type: '재개발', status: '완료', stage: '준공',        newName: '래미안 에스티움',               households: '약 1,722', moveIn: '2017', prorata: '', unionPrice: '', genPrice: '', note: '신길뉴타운 대표 완료 구역' },
    { region: '서울', city: '동대문구', name: '청량리4구역',                type: '재개발', status: '완료', stage: '준공',        newName: '청량리역 롯데캐슬 SKY-L65',     households: '약 1,425', moveIn: '2023', prorata: '', unionPrice: '', genPrice: '', note: '초고층 주상복합형 재개발' },
    { region: '서울', city: '동대문구', name: '전농7구역',                  type: '재개발', status: '완료', stage: '준공',        newName: '래미안 크레시티',               households: '약 2,397', moveIn: '2013', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '성북구',   name: '길음1재정비촉진구역',        type: '재개발', status: '완료', stage: '준공',        newName: '롯데캐슬 클라시아',             households: '약 2,029', moveIn: '2022', prorata: '', unionPrice: '', genPrice: '', note: '길음뉴타운' },
    { region: '서울', city: '성북구',   name: '장위4구역(장위뉴타운)',      type: '재개발', status: '완료', stage: '입주',        newName: '장위자이레디언트',              households: '약 2,840', moveIn: '2025', prorata: '', unionPrice: '', genPrice: '', note: '장위뉴타운 대표 완료 구역' },
    /* --- 서울 · 재건축 완료 (규모 비교 참고용) --- */
    { region: '서울', city: '송파구',   name: '가락시영 (재건축)',          type: '재건축', status: '완료', stage: '준공',        newName: '헬리오시티',                    households: '약 9,510', moveIn: '2018', prorata: '', unionPrice: '', genPrice: '', note: '재건축이지만 초대형 정비사업 비교 참고용' },
    { region: '서울', city: '강동구',   name: '둔촌주공 (재건축)',          type: '재건축', status: '완료', stage: '입주',        newName: '올림픽파크포레온',              households: '약 12,032', moveIn: '2025', prorata: '', unionPrice: '', genPrice: '84㎡ 약 13억 (2022 일반분양)', note: '국내 최대 규모 정비사업. 공사비 분쟁으로 지연된 사례' },
    /* ---------------- 서울 · 진행 ---------------- */
    { region: '서울', city: '용산구',   name: '한남3구역(한남뉴타운)',      type: '재개발', status: '진행', stage: '관리처분·이주 추진', newName: '(미정) 시공 현대건설',     households: '약 5,816 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '한남뉴타운 최대 구역' },
    { region: '서울', city: '용산구',   name: '한남2구역',                  type: '재개발', status: '진행', stage: '시공사 선정 후 사업 추진', newName: '(미정)',              households: '약 1,537 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '성동구',   name: '성수전략정비구역 1~4지구',   type: '재개발', status: '진행', stage: '정비계획 변경·추진',  newName: '(미정)',                   households: '약 9,000 계획(합)', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '한강변 초고층 추진' },
    { region: '서울', city: '동작구',   name: '노량진뉴타운(1~8구역)',      type: '재개발', status: '진행', stage: '구역별 관리처분·이주·착공', newName: '(구역별 상이)',       households: '합계 약 9,000 계획', moveIn: '구역별 상이', prorata: '', unionPrice: '', genPrice: '', note: '서울 서남권 최대 뉴타운' },
    { region: '서울', city: '동작구',   name: '흑석9구역',                  type: '재개발', status: '진행', stage: '이주·철거/착공',      newName: '(미정)',                   households: '약 1,536 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '동작구',   name: '흑석11구역',                 type: '재개발', status: '진행', stage: '관리처분·이주',        newName: '(미정)',                   households: '약 1,509 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '서대문구', name: '북아현2구역',                type: '재개발', status: '진행', stage: '사업시행 변경·관리처분 추진', newName: '(미정)',            households: '약 2,300 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '서대문구', name: '북아현3구역',                type: '재개발', status: '진행', stage: '사업시행 추진',        newName: '(미정)',                   households: '약 4,700 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '북아현뉴타운 최대 구역' },
    { region: '서울', city: '관악구',   name: '신림1구역(신속통합기획)',    type: '재개발', status: '진행', stage: '사업시행 준비',        newName: '(미정)',                   households: '약 4,200 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '신림뉴타운 핵심 구역' },
    { region: '서울', city: '성북구',   name: '장위6구역',                  type: '재개발', status: '진행', stage: '이주·착공 단계',       newName: '(미정)',                   households: '약 1,600 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '서울', city: '노원구',   name: '상계뉴타운(상계4·6구역 등)', type: '재개발', status: '진행', stage: '구역별 상이',          newName: '(구역별 상이)',            households: '구역별 상이', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    /* ---------------- 경기 · 완료 ---------------- */
    { region: '경기', city: '성남시 중원구', name: '성남 금광1구역',        type: '재개발', status: '완료', stage: '준공',        newName: 'e편한세상 금빛 그랑메종',       households: '약 5,320', moveIn: '2022', prorata: '', unionPrice: '', genPrice: '', note: '성남 원도심 재개발 대표 완료 사례' },
    { region: '경기', city: '성남시 수정구', name: '성남 신흥2구역',        type: '재개발', status: '완료', stage: '입주',        newName: '산성역 자이푸르지오',           households: '약 4,774', moveIn: '2025', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '성남시 수정구', name: '성남 중1구역',          type: '재개발', status: '완료', stage: '준공',        newName: '신흥역 하늘채 랜더스원',        households: '약 2,400', moveIn: '2023', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '수원시 팔달구', name: '수원 팔달8구역',        type: '재개발', status: '완료', stage: '준공',        newName: '매교역 푸르지오 SK뷰',          households: '약 3,603', moveIn: '2022', prorata: '', unionPrice: '', genPrice: '', note: '매교역 일대 재개발 대표 사례' },
    { region: '경기', city: '수원시 팔달구', name: '수원 팔달6구역',        type: '재개발', status: '완료', stage: '준공',        newName: '수원 센트럴 아이파크 자이',     households: '약 2,165', moveIn: '2023', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '안양시 만안구', name: '안양 냉천지구',         type: '재개발', status: '완료', stage: '준공',        newName: '평촌 트리지아',                 households: '약 2,400', moveIn: '2023', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '광명시',   name: '광명16R구역',                type: '재개발', status: '완료', stage: '준공',        newName: '광명 아크포레 자이위브',        households: '약 2,104', moveIn: '2020', prorata: '', unionPrice: '', genPrice: '', note: '광명뉴타운 첫 입주 구역' },
    { region: '경기', city: '광명시',   name: '광명1R구역',                 type: '재개발', status: '완료', stage: '입주',        newName: '광명자이더샵포레나',            households: '약 3,585', moveIn: '2025', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '광명시',   name: '광명4R구역',                 type: '재개발', status: '완료', stage: '입주',        newName: '광명 센트럴아이파크',           households: '약 1,957', moveIn: '2025', prorata: '', unionPrice: '', genPrice: '', note: '' },
    /* ---------------- 경기 · 진행 ---------------- */
    { region: '경기', city: '광명시',   name: '광명2R구역',                 type: '재개발', status: '진행', stage: '착공·입주 예정',       newName: '트리우스 광명',            households: '약 3,344', moveIn: '2026 예정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '성남시 수정구', name: '성남 산성구역',         type: '재개발', status: '진행', stage: '이주·철거/착공',       newName: '(미정)',                   households: '약 3,487 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '성남시 중원구', name: '성남 상대원2구역',      type: '재개발', status: '진행', stage: '관리처분·이주',         newName: '(미정)',                   households: '약 5,090 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '성남 원도심 대규모 구역' },
    { region: '경기', city: '성남시 수정구', name: '성남 수진1구역',        type: '공공재개발', status: '진행', stage: '초기 단계(LH 시행)', newName: '(미정)',                households: '수천 세대 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '성남 공공재개발 핵심 후보' },
    { region: '경기', city: '성남시 수정구', name: '성남 신흥1구역',        type: '공공재개발', status: '진행', stage: '초기 단계(LH 시행)', newName: '(미정)',                households: '수천 세대 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '성남시 중원구', name: '성남 상대원3구역',      type: '공공재개발', status: '진행', stage: '초기 단계',           newName: '(미정)',                households: '수천 세대 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '구리시',   name: '구리 수택E구역',             type: '재개발', status: '진행', stage: '관리처분·이주',         newName: '(미정)',                   households: '약 3,050 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '의왕시',   name: '의왕 내손다구역',            type: '재개발', status: '진행', stage: '착공·입주 예정',        newName: '인덕원 퍼스비엘',          households: '약 2,180', moveIn: '2026 예정', prorata: '', unionPrice: '', genPrice: '', note: '' },
    { region: '경기', city: '고양시',   name: '고양 능곡뉴타운(능곡2·5구역 등)', type: '재개발', status: '진행', stage: '구역별 상이',      newName: '(구역별 상이)',            households: '구역별 상이', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', note: '' },
  ],
};
