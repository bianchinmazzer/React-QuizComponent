import React, { Component } from "react";
import QuizQuestionButton from './QuizQuestionButton.js';

let quizData = require('./quiz_data.json')

class QuizQuestion extends Component {
    handleClick(button_text) {
        if(button_text === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
        }
    }
    render() {
        return (

        <main>
        <section>
          <p>
            {quizData.quiz_questions.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>{this.props.quiz_question.answer_options.map((answer, index) => {
            return <QuizQuestionButton button_text={answer} key={index} clickHandler={this.handleClick.bind(this)} />
          })}
          </ul>
        </section>
      </main>
        )
    }
}

export default QuizQuestion;