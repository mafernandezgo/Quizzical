import { useEffect, useState } from "react"
import { nanoid } from 'nanoid';
import Question from "./Question";

export default function QuizPage (){
    const [questionArray, setQuestionArray] = useState([])
    const [correctAnswers, setCorrectAnswers] = useState (false)
    // const [answers, setAnswers] = useState([])

    useEffect( ()=>{
        fetch("https://opentdb.com/api.php?amount=5&category=10&type=multiple")
            .then((response) => response.json())
            .then((data) => {setQuestionArray(data.results)})
    }, [])

    const questionList = questionArray.map((question) => {
        const answers = [ {
            id: nanoid(), 
            answer: question.correct_answer, 
            isCorrect: true, 
            isSelected: false
        },
        [
            ...question.incorrect_answers.map((ans) => ({
                id: nanoid(), 
                answer: ans, 
                isCorrect: false,
                isSelected: false
            }))
        ]
        ]
        return (
            <Question 
                answers={answers}  
                correctAnswers={correctAnswers}
                question={question.question} 
                key={nanoid()}/>
        )
    })

    // useEffect ( () => {
        function checkAnswers () {
            setCorrectAnswers(true)
        }
    // } , [])
    // console.log(correctAnswers)
    // console.log(questionList)

    return(
        <section className="questionsSection">
            <div>{questionList}</div>
            <button onClick={checkAnswers} className="button btnCheckAnswers"> Check Answers</button>
        </section>
    )
}


