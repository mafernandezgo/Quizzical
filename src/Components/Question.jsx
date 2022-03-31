	import { nanoid } from "nanoid"
	import { useEffect, useState } from "react"

export default function Question(props) {
	const [answers, setAnswers] = useState(props.answers[1])

	function test(id) {
	setAnswers((prevAnswers) =>
		prevAnswers.map((answer) => {
		return answer.answer == id
			? { ...answer, isSelected: !answer.isSelected }
			: answer
		})
	)
	}

	let answersArray = answers.map((x) => {
	let answer = x.answer.replaceAll("&#039;", "'").replaceAll("&quot;", '"')
	console.log(x.isCorrect, x.isSelected)


	// function letClas (correct, selected, check){
	// 	if (correct === true && check === true){
	// 		"correct"
	// 	} else if( correct === false && selected === true && check === true){
	// 		"wrong"
	// 	} else( "" )
	// }

	return (
		<button
		onClick={() => test(x.answer)}
		key={nanoid()}
		className={`answerBtn ${x.isSelected ? "selected" : ""} ${x.isCorrect && x.isSelected && props.correctAnswers ? "correct":""}`}>
		{answer}
		</button>
	)
	})

	useEffect(() => {
	setAnswers((prev) =>
		prev.concat(props.answers[0]).sort(() => Math.random() - 0.5)
	)
	}, [])

	return (
	<div className="quizQuestion" key={props.question}>
		<h3>
		{props.question.replaceAll("&#039;", "'").replaceAll("&quot;", '"')}
		</h3>
		<div className="answersList">{answersArray}</div>
		<hr />
	</div>
	)	
}
