import Child from "./Child";
import Member from "./Member.jsx";
import "./style.css"

function Name() {
  // 컴포넌트의 조건 : 함수명이 대문자로 시작, 반환값 (리턴문, 리턴문의 반환값은 태그여야 함!) 이 있으며 UI 요소를 반환해야 함
  return <h1>App 안에서 태어난 컴포넌트</h1>;
}

function App() {
  return (
    <>
      <Name />
      <Child />
      <Child />
      <Member />
      <Member />
      <Member />
      <Member />
    </>
  );
}

export default App;
