export default function MainPage (props){

    return( 
    <main>
        <h1 className="quizTitle">Quizzical</h1>
        <p className="quizDescription">Some description if needed</p>
        <button onClick={props.clickHandler} className="button btnStart">Start Quiz</button>
    </main>)
}