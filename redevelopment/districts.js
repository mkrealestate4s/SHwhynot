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
     source     : 위 수치의 출처 (예: '입주자모집공고 2022; 한국경제 2020')
     reliability: 출처 신뢰도 — '공식'(모집공고·고시문·조합자료)
                  | '언론보도' | '비공식'(블로그·커뮤니티)
     note       : 비고
   ▶ 주의: 세대수·단계는 대략적인 참고값이며 작성 시점(2026년 상반기)
     기준입니다. 비례율·분양가는 웹 조사(2026-07)로 수집한 보도·공고
     기준 값으로, 변경총회 등으로 달라졌을 수 있으니 투자 판단 전
     반드시 고시문·모집공고 원문을 확인하세요.
   ============================================================ */
window.DISTRICT_DB = {
  updated: '2026-07',
  entries: [
    /* ---------------- 서울 · 완료 ---------------- */
    { region: '서울', city: '마포구',   name: '아현3구역(아현뉴타운)',      type: '재개발', status: '완료', stage: '준공',        newName: '마포래미안푸르지오',            households: '약 3,885', moveIn: '2014',
      prorata: '97% (2012 분담금 확정)', unionPrice: '', genPrice: '84㎡ 약 7억 (2012 분양)',
      source: '하우징헤럴드 2012(비례율 97%); 아주경제 2024(분양 당시 미분양 회고)', reliability: '언론보도',
      note: '분양 당시 고분양가 논란·미분양 후 마포 대장 단지가 된 사례' },
    { region: '서울', city: '종로구',   name: '돈의문뉴타운1구역',          type: '재개발', status: '완료', stage: '준공',        newName: '경희궁자이',                    households: '약 2,415', moveIn: '2017',
      prorata: '', unionPrice: '84㎡ 약 6억4,300만 (2014 분양신청 기준)', genPrice: '84㎡ 약 7억8,500만 (2014 분양)',
      source: '경향신문 2014(일반분양가); 헤럴드경제 2014(조합원분양가)', reliability: '언론보도',
      note: '도심 한복판 재개발 성공 사례' },
    { region: '서울', city: '성동구',   name: '왕십리뉴타운3구역',          type: '재개발', status: '완료', stage: '준공',        newName: '센트라스',                      households: '약 2,529', moveIn: '2016',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 5억7천~6억4천만 (2015 분양)',
      source: 'HMG저널(현대건설) 2015; 언론보도 2015', reliability: '언론보도',
      note: '센트라스는 3구역임(2구역 아님 — 조사로 정정)' },
    { region: '서울', city: '성동구',   name: '왕십리뉴타운1·2구역',        type: '재개발', status: '완료', stage: '준공',        newName: '텐즈힐',                        households: '약 3,800', moveIn: '2015~16',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 5억6천~6억2천만 (1구역, 2013 분양)',
      source: '한국경제 2013; 아주경제 2013 (2구역 비례율 하락 보도는 비공식 수준이라 미기재)', reliability: '언론보도',
      note: '텐즈힐은 1·2구역임(1·3구역 아님 — 조사로 정정)' },
    { region: '서울', city: '성동구',   name: '옥수12구역',                 type: '재개발', status: '완료', stage: '준공',        newName: '래미안 옥수 리버젠',            households: '약 1,511', moveIn: '2012',
      prorata: '', unionPrice: '', genPrice: '84㎡ 일반분양 없음 (113·134㎡ 90가구만, 2011 분양)',
      source: '아주경제 2011; 매일일보 2011', reliability: '언론보도',
      note: '한강변 입지' },
    { region: '서울', city: '동작구',   name: '흑석7구역(흑석뉴타운)',      type: '재개발', status: '완료', stage: '준공',        newName: '아크로리버하임',                households: '약 1,073', moveIn: '2019',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 7억8천만 (2016 분양)',
      source: '이데일리 2022(분양가 회고)', reliability: '언론보도',
      note: '한강변 흑석뉴타운 대표 완료 구역, 청약경쟁률 89.5:1' },
    { region: '서울', city: '마포구',   name: '대흥2구역',                  type: '재개발', status: '완료', stage: '준공',        newName: '신촌그랑자이',                  households: '약 1,248', moveIn: '2020',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 7억6천~8억2천만 (2016 분양)',
      source: '부동산114·언론보도 2016', reliability: '언론보도',
      note: '북아현1-2구역으로 잘못 알려지기도 하나 마포 대흥2구역임(조사로 정정)' },
    { region: '서울', city: '서대문구', name: '북아현1-3구역',              type: '재개발', status: '완료', stage: '준공',        newName: 'e편한세상 신촌',                households: '약 1,910', moveIn: '2017',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 6억4천~7억3천만 (2015 분양)',
      source: '한국경제 2015', reliability: '언론보도',
      note: '' },
    { region: '서울', city: '서대문구', name: '가재울뉴타운4구역',          type: '재개발', status: '완료', stage: '준공',        newName: 'DMC파크뷰자이',                 households: '약 4,300', moveIn: '2015',
      prorata: '82.36% (조합 확정)', unionPrice: '', genPrice: '84㎡ 약 5억~5억4천만 (2013 분양)',
      source: '서대문사람들(비례율); 언론보도 종합(분양가)', reliability: '언론보도',
      note: '가재울뉴타운 최대 규모. 비례율 100% 미만 사례' },
    { region: '서울', city: '영등포구', name: '신길7구역(신길뉴타운)',      type: '재개발', status: '완료', stage: '준공',        newName: '래미안 에스티움',               households: '약 1,722', moveIn: '2017',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 5억3천~5억6천만 (2014 분양)',
      source: '한국경제 2014; 서울신문 2017', reliability: '언론보도',
      note: '신길뉴타운 대표 완료 구역' },
    { region: '서울', city: '동대문구', name: '청량리4구역',                type: '재개발', status: '완료', stage: '준공',        newName: '청량리역 롯데캐슬 SKY-L65',     households: '약 1,425', moveIn: '2023',
      prorata: '124% (관리처분 기준 보도)', unionPrice: '', genPrice: '84㎡ 약 8억5천~10억8천만 (2019 분양)',
      source: '아주경제 2023(비례율); 한국경제·서울경제 2019(분양가)', reliability: '언론보도',
      note: '도시환경정비사업(토지등소유자 방식). 초고층 주상복합형' },
    { region: '서울', city: '동대문구', name: '전농7구역',                  type: '재개발', status: '완료', stage: '준공',        newName: '래미안 크레시티',               households: '약 2,397', moveIn: '2013',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 4억7,900만 (2011~12 분양)',
      source: '서울경제 2022(분양가 회고)', reliability: '언론보도',
      note: '' },
    { region: '서울', city: '성북구',   name: '길음1재정비촉진구역',        type: '재개발', status: '완료', stage: '준공',        newName: '롯데캐슬 클라시아',             households: '약 2,029', moveIn: '2022',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 7억~8억1천만 (2019 분양)',
      source: '뉴스핌·비즈워치 2019(HUG 승인 분양가)', reliability: '언론보도',
      note: '길음뉴타운' },
    { region: '서울', city: '성북구',   name: '장위4구역(장위뉴타운)',      type: '재개발', status: '완료', stage: '입주',        newName: '장위자이레디언트',              households: '약 2,840', moveIn: '2025',
      prorata: '약 118% → 공사비 증액 시 105.6% 전망 (2025 보도)', unionPrice: '84㎡ 약 4억6,800만 (2016 관리처분 보도)', genPrice: '84㎡ 약 9억3천~10억2천만 (2022 분양)',
      source: '헤럴드경제 2025(비례율); 헤럴드경제·뉴데일리 2022(일반분양가); 하우징헤럴드 2016(조합원분양가)', reliability: '언론보도',
      note: '장위뉴타운 대표 완료 구역. 공사비 증액으로 비례율 변동 사례' },
    /* --- 서울 · 재건축 완료 (규모 비교 참고용) --- */
    { region: '서울', city: '송파구',   name: '가락시영 (재건축)',          type: '재건축', status: '완료', stage: '준공',        newName: '헬리오시티',                    households: '약 9,510', moveIn: '2018',
      prorata: '92.8% (관리처분 보도)', unionPrice: '3.3㎡당 약 2,626만원 보도(일반분양가보다 높아 논란)', genPrice: '84㎡ 약 9억 (2015 분양)',
      source: '하우징헤럴드(비례율); EBN 2015(분양가)', reliability: '언론보도',
      note: '재건축이지만 초대형 정비사업 비교 참고용' },
    { region: '서울', city: '강동구',   name: '둔촌주공 (재건축)',          type: '재건축', status: '완료', stage: '입주',        newName: '올림픽파크포레온',              households: '약 12,032', moveIn: '2025',
      prorata: '106.89% → 138.62% (2020 관리처분 변경; 비공식 집계)', unionPrice: '', genPrice: '84㎡ 약 12억4천~13억2천만 (2022 분양)',
      source: '경향신문 2022(일반분양가, 3.3㎡당 3,829만원); 비례율은 나무위키 등 비공식', reliability: '언론보도',
      note: '국내 최대 규모 정비사업. 공사비 분쟁으로 지연된 사례' },
    /* ---------------- 서울 · 진행 ---------------- */
    { region: '서울', city: '용산구',   name: '한남3구역(한남뉴타운)',      type: '재개발', status: '진행', stage: '관리처분·이주 추진', newName: '(미정) 시공 현대건설',     households: '약 5,816 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '한남뉴타운 최대 구역' },
    { region: '서울', city: '용산구',   name: '한남2구역',                  type: '재개발', status: '진행', stage: '시공사 선정 후 사업 추진', newName: '(미정)',              households: '약 1,537 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '서울', city: '성동구',   name: '성수전략정비구역 1~4지구',   type: '재개발', status: '진행', stage: '정비계획 변경·추진',  newName: '(미정)',                   households: '약 9,000 계획(합)', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '한강변 초고층 추진' },
    { region: '서울', city: '동작구',   name: '노량진뉴타운(1~8구역)',      type: '재개발', status: '진행', stage: '구역별 관리처분·이주·착공', newName: '(구역별 상이)',       households: '합계 약 9,000 계획', moveIn: '구역별 상이', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '서울 서남권 최대 뉴타운' },
    { region: '서울', city: '동작구',   name: '흑석9구역',                  type: '재개발', status: '진행', stage: '이주·철거/착공',      newName: '(미정)',                   households: '약 1,536 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '서울', city: '동작구',   name: '흑석11구역',                 type: '재개발', status: '진행', stage: '관리처분·이주',        newName: '(미정)',                   households: '약 1,509 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '서울', city: '서대문구', name: '북아현2구역',                type: '재개발', status: '진행', stage: '사업시행 변경·관리처분 추진', newName: '(미정)',            households: '약 2,300 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '서울', city: '서대문구', name: '북아현3구역',                type: '재개발', status: '진행', stage: '사업시행 추진',        newName: '(미정)',                   households: '약 4,700 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '북아현뉴타운 최대 구역' },
    { region: '서울', city: '관악구',   name: '신림1구역(신속통합기획)',    type: '재개발', status: '진행', stage: '사업시행 준비',        newName: '(미정)',                   households: '약 4,200 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '신림뉴타운 핵심 구역' },
    { region: '서울', city: '성북구',   name: '장위6구역',                  type: '재개발', status: '진행', stage: '이주·착공 단계',       newName: '(미정)',                   households: '약 1,600 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '서울', city: '노원구',   name: '상계뉴타운(상계4·6구역 등)', type: '재개발', status: '진행', stage: '구역별 상이',          newName: '(구역별 상이)',            households: '구역별 상이', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    /* ---------------- 경기 · 완료 ---------------- */
    { region: '경기', city: '성남시 중원구', name: '성남 금광1구역',        type: '재개발', status: '완료', stage: '준공',        newName: 'e편한세상 금빛 그랑메종',       households: '약 5,320', moveIn: '2022',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 5억9,500만 (2019 분양)',
      source: '분양정보 사이트 2019 — 공식 공고 원문 미확인', reliability: '비공식',
      note: 'LH 민관합동 공공참여형. 성남 원도심 재개발 대표 완료 사례' },
    { region: '경기', city: '성남시 수정구', name: '성남 신흥2구역',        type: '재개발', status: '완료', stage: '입주',        newName: '산성역 자이푸르지오',           households: '약 4,774', moveIn: '2025',
      prorata: '103.07% (2017 관리처분) → 144% 상승 보도 (2020)', unionPrice: '3.3㎡당 약 1,180만원 (관리처분 기준)', genPrice: '84㎡ 약 6억6천~7억2천만 (2020 분양)',
      source: '하우징헤럴드 2017(관리처분 비례율); 아주경제 2020(비례율 상향·분양가)', reliability: '언론보도',
      note: '일반분양 흥행으로 비례율이 크게 오른 사례' },
    { region: '경기', city: '성남시 수정구', name: '성남 중1구역',          type: '재개발', status: '완료', stage: '준공',        newName: '신흥역 하늘채 랜더스원',        households: '약 2,400', moveIn: '2023',
      prorata: '100.5% (비공식)', unionPrice: '', genPrice: '84㎡ 약 5억5천~6억2천만 (2019 분양)',
      source: '나무위키 등 — 공식 자료 미확인', reliability: '비공식',
      note: '' },
    { region: '경기', city: '수원시 팔달구', name: '수원 팔달8구역',        type: '재개발', status: '완료', stage: '준공',        newName: '매교역 푸르지오 SK뷰',          households: '약 3,603', moveIn: '2022',
      prorata: '', unionPrice: '', genPrice: '84㎡ 평균 약 6억5,200만 (2020 분양)',
      source: '이코노믹리뷰 2020', reliability: '언론보도',
      note: '매교역 일대 재개발 대표 사례' },
    { region: '경기', city: '수원시 팔달구', name: '수원 팔달10구역',       type: '재개발', status: '완료', stage: '준공',        newName: '수원 센트럴 아이파크 자이',     households: '약 2,165', moveIn: '2023',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 6억6,200만 (2020 분양; 2026 재공급 공고 기준)',
      source: '서울신문 2020; 청약홈 재공급 모집공고 2026', reliability: '공식',
      note: '팔달6구역으로 잘못 알려지기도 하나 팔달10구역임(조사로 정정)' },
    { region: '경기', city: '안양시 만안구', name: '안양 융창아파트주변지구', type: '재개발', status: '완료', stage: '준공',      newName: '평촌 트리지아',                 households: '약 2,400', moveIn: '2023',
      prorata: '', unionPrice: '', genPrice: '84㎡ 일반분양 없음; 59㎡ 약 6억2천, 74㎡ 약 7억8천만 (2021 분양)',
      source: '머니S 2021', reliability: '언론보도',
      note: '냉천지구로 알려지기도 하나 융창아파트주변지구임(조사로 정정)' },
    { region: '경기', city: '광명시',   name: '광명16R구역',                type: '재개발', status: '완료', stage: '준공',        newName: '광명 아크포레 자이위브',        households: '약 2,104', moveIn: '2020',
      prorata: '', unionPrice: '', genPrice: '84㎡ 최고 약 5억5,400만 (2017 분양)',
      source: '비즈워치 2024(분양가 회고)', reliability: '언론보도',
      note: '광명뉴타운 첫 입주 구역' },
    { region: '경기', city: '광명시',   name: '광명1R구역',                 type: '재개발', status: '완료', stage: '입주',        newName: '광명자이더샵포레나',            households: '약 3,585', moveIn: '2025',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 9억7천~10억 (2023 분양)',
      source: '쿠키뉴스·서울경제 2023', reliability: '언론보도',
      note: '' },
    { region: '경기', city: '광명시',   name: '광명4R구역',                 type: '재개발', status: '완료', stage: '입주',        newName: '광명 센트럴아이파크',           households: '약 1,957', moveIn: '2025',
      prorata: '116.16% (2020 관리처분 보도)', unionPrice: '', genPrice: '84㎡ 약 11억8천~12억7천만 (2023 분양)',
      source: '뉴스핌 2020(비례율); 분양가 확정 보도 2023', reliability: '언론보도',
      note: '' },
    /* ---------------- 경기 · 진행 ---------------- */
    { region: '경기', city: '광명시',   name: '광명2R구역',                 type: '재개발', status: '진행', stage: '착공·입주 예정',       newName: '트리우스 광명',            households: '약 3,344', moveIn: '2026 예정',
      prorata: '', unionPrice: '', genPrice: '84㎡ 약 10억2천~11억5천만 (2023 분양)',
      source: '머니투데이·한국경제 2023(광명시 분양가 승인)', reliability: '언론보도',
      note: '' },
    { region: '경기', city: '성남시 수정구', name: '성남 산성구역',         type: '재개발', status: '진행', stage: '이주·철거/착공',       newName: '(미정)',                   households: '약 3,487 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '경기', city: '성남시 중원구', name: '성남 상대원2구역',      type: '재개발', status: '진행', stage: '관리처분·이주',         newName: '(미정)',                   households: '약 5,090 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '성남 원도심 대규모 구역' },
    { region: '경기', city: '성남시 수정구', name: '성남 수진1구역',        type: '공공재개발', status: '진행', stage: '초기 단계(LH 시행)', newName: '(미정)',                households: '수천 세대 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '성남 공공재개발 핵심 후보' },
    { region: '경기', city: '성남시 수정구', name: '성남 신흥1구역',        type: '공공재개발', status: '진행', stage: '초기 단계(LH 시행)', newName: '(미정)',                households: '수천 세대 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '경기', city: '성남시 중원구', name: '성남 상대원3구역',      type: '공공재개발', status: '진행', stage: '초기 단계',           newName: '(미정)',                households: '수천 세대 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '경기', city: '구리시',   name: '구리 수택E구역',             type: '재개발', status: '진행', stage: '관리처분·이주',         newName: '(미정)',                   households: '약 3,050 계획', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
    { region: '경기', city: '의왕시',   name: '의왕 내손라구역',            type: '재개발', status: '진행', stage: '착공·입주 예정',        newName: '인덕원 퍼스비엘',          households: '약 2,180', moveIn: '2026 예정',
      prorata: '106% (종상향 후; 당초 65%, 2019 관리처분)', unionPrice: '', genPrice: '84㎡ 약 10억1천~10억8천만 (2023 분양)',
      source: '주거환경신문 2020(비례율); 굿모닝경제 2023(분양가)', reliability: '언론보도',
      note: '내손다구역으로 잘못 알려지기도 하나 내손라구역임(조사로 정정). 종상향으로 비례율이 크게 오른 사례' },
    { region: '경기', city: '고양시',   name: '고양 능곡뉴타운(능곡2·5구역 등)', type: '재개발', status: '진행', stage: '구역별 상이',      newName: '(구역별 상이)',            households: '구역별 상이', moveIn: '미정', prorata: '', unionPrice: '', genPrice: '', source: '', reliability: '', note: '' },
  ],
};
