import { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';


function App() {

  const [InputValue , setInputValue] = useState('') //변수명은 set만 추가해주기
  const [TodoList , setTodoList] = useState([])
  
  const addItem = () => { //익명함수
    let a = document.getElementById("yjy");
    a.value = "";
    setTodoList([...TodoList, InputValue]) //TodoList 배열 안에 InputValue값을 넣어주기

  }

  return (
    <div className="container">
      <div className="title">UMC Study Plan</div>

      <div className="br"></div>

      {/* (event) => console.log(event.target.value) */}

      <div className="inputWrapper">
          {/* onChange는 자판을 누를때마다 실행 setInputValue에 업데이트 해주기 자판하나하나 칠때마다 setInputValue에 들어가게됨*/}
          {/* setInputValue를 버튼을 누르면 그때에 값을 InputValue로 가져와 해야할일에 넣어주기  */}
          <input type="text" id="yjy" onChange={(event) => setInputValue(event.target.value)} className="input_value" placeholder="UMC 스터디 계획을 작성해보세요!" />
          <button className='add_button' onClick={addItem}>추가</button>
      </div>
      
        <TodoBoard TodoList={TodoList}/>
      
    
    
    </div>
  );
}

export default App;

