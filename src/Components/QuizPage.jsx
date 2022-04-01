import { useEffect, useState } from 'react'
import Question from './Question'

export default function QuizPage({ setIsOnMainPage }) {
  const [questionArray, setQuestionArray] = useState([])
  const [showAnswer, setShowAnswer] = useState(false)
  const [answersArray, setAnswersArray] = useState([])
  // const [selectedAnswer, setSelectedAnswer] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=10&type=multiple')
      .then((response) => response.json())
      .then((data) => {
        setQuestionArray(
          data.results.map((question) => ({
            ...question,
            selectedAnswer: null,
          }))
        )
      })
  }, [])

  function CheckAnswerHandler() {
    setShowAnswer(true)
    setAnswersArray(
      questionArray.filter(
        (answer) => answer.correct_answer === answer.selectedAnswer
      )
    )
  }

  console.log(answersArray)

  const questionList = questionArray.map((question) => {
    const answers = [
      {
        answer: question.correct_answer,
        isCorrect: true,
      },
      ...question.incorrect_answers.map((ans) => ({
        answer: ans,
        isCorrect: false,
      })),
    ]

    return (
      <Question
        selectedAnswer={question.selectedAnswer}
        answers={answers}
        showAnswer={showAnswer}
        question={question.question}
        onClickAnswer={(answer) =>
          setQuestionArray((prevValue) => [
            ...prevValue,
            { ...question, selectedAnswer: answer },
          ])
        }
        // Set selected answer in the correct question
        key={question.question}
      />
    )
  })

  return (
    <section className="questionsSection">
      <div>{questionList}</div>
      {!showAnswer ? (
        <button onClick={CheckAnswerHandler} className="button btnCheckAnswers">
          Check Answers
        </button>
      ) : (
        <div className="bottomBar">
          <p>{`You score ${answersArray.length}/${questionArray.length} correct answers`}</p>
          <button
            onClick={() => setIsOnMainPage(true)}
            className="button btnCheckAnswers"
          >
            {' '}
            Play Again{' '}
          </button>
        </div>
      )}
    </section>
  )
}
