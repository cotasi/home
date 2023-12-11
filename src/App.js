import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src="/logo512.png" alt="logo" />
         <p>소스 호출하기 (public은 루트 디렉토리 /로 하면 됩니다.)</p>
         <p>src 안의 넣은 소스는 node의 컴파일 과정을 거치므로 </p>
      </header>
    </div>
  );
}

export default App;
