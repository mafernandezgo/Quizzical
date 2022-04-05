import logo from './logo.svg'
import './App.css'
import MainPage from './Components/MainPage'
import QuizPage from './Components/QuizPage'
import { useState } from 'react'

function App() {
  const [isOnMainPage, setIsOnMainPage] = useState(true)
  const [categories, setCategories] = useState([])
  const [inputData, setInputData] = useState({})
  const [showModal, setShowModal] = useState(false)

  function clickHandler() {
    !inputData.numberOfQuestions || !inputData.category
      ? setShowModal(true)
      : setIsOnMainPage(!isOnMainPage)
  }

  function PlayAgain() {
    setIsOnMainPage(true)
    setInputData({})
  }

  return (
    <div className="App">
      <main className="AppMain">
        <div className="bgYellow"></div>
        <div className="bgBlue"></div>
        {isOnMainPage ? (
          <MainPage
            categories={categories}
            clickHandler={clickHandler}
            inputData={inputData}
            setCategories={setCategories}
            setInputData={setInputData}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        ) : (
          <QuizPage inputData={inputData} PlayAgain={PlayAgain} />
        )}
      </main>
    </div>
  )
}

export default App
