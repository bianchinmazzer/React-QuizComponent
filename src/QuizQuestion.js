import React, { Component } from "react";
import QuizQuestionButton from './QuizQuestionButton.js';

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
            <QuizQuestionButton button_text={quizData.quiz_questions[0].answer_options[0]} />
          </ul>
        </section>
      </main>
        )
    }
}

export default QuizQuestion;