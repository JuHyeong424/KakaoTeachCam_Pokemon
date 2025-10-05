나만의 포켓몬 도감 만들기 (FE 2차 과제)
Vite, React, styled-components를 활용하여 자신만의 포켓몬 도감을 만드는 프로젝트입니다. prop drilling부터 Context API를 이용한 전역 상태 관리, React-router-dom을 활용한 라우팅 구현을 통해 React의 데이터 흐름과 상태 관리에 대한 이해를 높이는 것을 목표로 합니다.
🔗 배포 링크: [Vercel 배포 링크] (실제 배포 링크를 여기에 추가하세요)
📂 Github Repository: https://github.com/JuHyeong424/KakaoTeachCam_Pokemon
🗓️ 개발 기간
2025년 5월 19일 ~ 2025년 5월 25일
✨ 주요 기능
필수 기능 (6/6)
✔️ Git 브랜치 전략 활용:
prop-drilling 브랜치: Props를 통해 상태를 전달하는 방식 구현
context 브랜치: Context API를 활용하여 전역 상태 관리 및 prop drilling 문제 해결
✔️ 페이지 라우팅 구현:
react-router-dom을 사용하여 Home과 Dex 페이지 라우팅
포켓몬 카드 클릭 시 해당 포켓몬의 디테일 페이지로 이동
✔️ 도감 페이지 구성:
Dashboard, PokemonList, PokemonCard 컴포넌트로 구조화
MOCK_DATA를 활용하여 포켓몬 목록 표시
추가 버튼 클릭 시 Dashboard에 포켓몬 추가 (최대 6마리 제한)
✔️ 디테일 페이지 구현:
QueryString으로 포켓몬 ID를 받아 해당 포켓몬의 상세 정보 표시
'뒤로 가기' 버튼을 통해 이전 페이지로 이동 기능 구현
✔️ 알림 기능 구현:
중복 선택 시 "이미 선택된 포켓몬입니다." alert 발생
최대 선택 수(6마리) 초과 시 "더 이상 선택할 수 없습니다." alert 발생
✔️ styled-components를 활용한 스타일링:
styled-components를 사용하여 전체적인 UI 스타일링
반응형 레이아웃을 고려하여 모바일과 데스크탑 환경 모두 지원
도전 기능 (3/4, +15점)
🚀 디테일 페이지에 '추가/삭제' 버튼 구현
포켓몬 상세 정보 페이지에서 바로 도감에 포켓몬을 추가하거나 삭제하는 기능
페이지 전환 시에도 데이터가 유지되도록 상태 관리
🚀 리스트 페이지 데이터 유지
상세 페이지에서 목록 페이지로 돌아와도 기존에 선택했던 포켓몬 목록이 초기화되지 않도록 구현
🚀 UI 라이브러리 활용
기존 alert 알림을 사용자 친화적인 UI(Modal, Toast)로 개선하여 사용자 경험 향상
🛠️ 기술 스택
Core: React, Vite
Routing: React-router-dom
Styling: styled-components
State Management: Context API
Deployment: Vercel
📂 프로젝트 구조
code
Code
/src
├── /apis              # 데이터(MOCK_DATA) 관련
├── /assets            # 이미지, 폰트 등 정적 파일
├── /components        # 공통 컴포넌트
│   ├── /Dashboard
│   ├── /PokemonCard
│   └── /PokemonList
├── /context           # Context API 관련
├── /layout            # 공통 레이아웃
├── /pages             # 페이지 컴포넌트
│   ├── Home.jsx
│   ├── Dex.jsx
│   └── PokemonDetail.jsx
├── /router            # 라우터 설정
├── /styles            # 전역 스타일 및 테마
├── App.jsx
└── main.jsx

💬 종합 피드백
전체 UI 구조가 잘 짜여 있고, MOCK_DATA를 활용한 흐름이 자연스럽습니다.
코드 모듈화 및 Context API를 이용한 전역 상태 관리가 잘 이루어졌습니다.
styled-component 적용과 UI 라이브러리 활용이 매우 훌륭합니다.
