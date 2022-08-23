import React, { Component } from "react";

let quizData = require('./quiz_data.json')

class QuizQuestion extends Component {
    render() {
        return (

        <main>
        <section>
          <p>
            {quizData.quiz_questions[0].instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            <li>
                {quizData.quiz_questions[0].answer_options[0]}
            </li>
          </ul>
        </section>
      </main>
        )
    }
}

export default QuizQuestion;