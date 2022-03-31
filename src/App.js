import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import QuizPage from './Components/QuizPage';
import { useState } from 'react';

function App() {
  const [isOnMainPage, setIsOnMainPage] = useState(true)

  function clickHandler (){
    setIsOnMainPage(!isOnMainPage)
}
  return (
    <div className="App">
      <main className="AppMain">
        <div className="bgYellow"></div>
        <div className="bgBlue"></div>
        {isOnMainPage ?
        <MainPage clickHandler={clickHandler} />:
        <QuizPage/>}
      </main>
    </div>
  );
}

export default App;
