<h1>포켓몬 도감</h1>
<p>카카오테크 캠퍼스 1단계로 포켓몬 도감 추가하기 프로젝트를 하였습니다.</p>

<h2>실행</h2>
`npm install` 후에 `npm run dev`로 실행하면 됩니다.

<h2>기능</h2>
<h3>포켓몬 추가하기</h3>
<img src="./public/gif/add.gif">
<p>
포켓몬을 도감에 최대 6마리까지 추가할 수 있습니다. <br>
이미 추가된 포켓몬을 추가하려고 하면 경고가 뜹니다.
6마리를 초과해서 포켓몬을 추가하려고 하면 경고가 뜹니다.
</p>

<h3>포켓몬 삭제하기</h3>
<img src="./public/gif/delete.gif">
<p>
추가한 포켓몬을 삭제할 수 있습니다.<br>
삭제 버튼을 누르면 즉시 반영됩니다.<br>
다른 모달에서 삭제 버튼을 눌러도 메인 페이지에 반영됩니다.
</p>

<h2>기술 스택</h2>
<table>
  <thead>
    <tr>
      <th>Frontend</th>
      <th>Dev Tools</th>
      <th>Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <!-- Frontend -->
      <td align="center">
        <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" /><br/>
        <img src="https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/Styled--components-DB7093?logo=styledcomponents&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/React_Toastify-5E17EB?logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
      </td>
    <td align="center">
        <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/React_Refresh-61DAFB?logo=react&logoColor=black" /><br/>
        <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
      </td>
      <td align="center">
        <img src="https://img.shields.io/badge/@types/react-61DAFB?logo=react&logoColor=black" /><br/>
        <img src="https://img.shields.io/badge/@types/react--dom-61DAFB?logo=react&logoColor=black" />
      </td>
    </tr>
  </tbody>
</table>

<h2>회고</h2>
<p><strong>트러블 슈팅 로그</strong>: https://www.notion.so/teamsparta/1-T-I-L-1c92dc3ef514802f85b7eeb46784afdd?p=1fc2dc3ef51480dea40dcf73fc213da4&pm=s</p>
<h3>고민 1: 유령 데이터 문제</h3>
<ul>
  <li><strong>문제</strong>: 콘솔에서는 데이터가 보이지만, JSX에서는 <code>undefined</code>로 접근되는 현상 발생</li>
  <li><strong>원인</strong>: <code>navigate</code> 실행과 컴포넌트 렌더링 간 미세한 타이밍 충돌</li>
  <li><strong>해결</strong>: <code>navigate</code>의 <code>state</code> 옵션을 사용하여 
      데이터 전달을 명확히 하고 페이지 책임을 분리하여 렌더링 안정화</li>
</ul>

<h3>고민 2: alert 창 중복 실행</h3>
<ul>
  <li><strong>문제</strong>: 한 번만 떠야 할 경고창이 여러 번 실행됨</li>
  <li><strong>원인</strong>: React <code>StrictMode</code>의 중복 렌더링으로 인한 부수 효과</li>
  <li><strong>해결</strong>: 상태(State)를 통해 실행 조건을 제어하고,
      부수 효과의 <strong>멱등성(idempotence)</strong>을 고려하여 코드 개선</li>
</ul>

<h2>무엇을 배웠는가</h2>
<ul>
  <li><strong>데이터 흐름 설계의 중요성</strong>:
      안정적인 앱을 위해 데이터 전달 구조를 명확히 해야 함</li>
  <li><strong>React 내부 동작 이해</strong>:
      StrictMode 등 프레임워크의 동작 메커니즘이 버그 해결의 핵심</li>
  <li><strong>Side Effect 제어</strong>:
      렌더링은 여러 번 일어날 수 있으며, 부수 효과는 신중하게 다루어야 함</li>
</ul>

