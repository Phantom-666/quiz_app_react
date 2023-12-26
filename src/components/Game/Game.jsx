import React, { useState, useEffect } from "react"
import { fetchData, wait } from "../../utils"
import "./Game.css"
import Preload from "../Preload"
import Right from "../Right"
import Wrong from "../Wrong"

const Game = () => {
  const [isPreload, setIsPreload] = useState(true)
  const [questions, setQuestions] = useState([])
  const [answered, setAnswered] = useState(false)

  const [score, setScore] = useState(0)

  const [isRight, setIsRight] = useState(false)

  const [catIndex, setCatIndex] = useState(-1)

  const preload = async () => {
    const { questions } = fetchData()

    await wait(2)
    setIsPreload(false)
    setQuestions(questions)
  }

  useEffect(() => {
    preload()
  }, [])

  useEffect(() => {
    if (answered) {
      setQuestions((q) => {
        if (!q || !q.categories) {
          return q
        }
        const updatedQuestions = { ...q }
        updatedQuestions.categories = [...q.categories]
        updatedQuestions.categories[catIndex] = {
          ...q.categories[catIndex],
          questions: q.categories[catIndex].questions.slice(1),
        }
        console.log("triggered")
        return updatedQuestions
      })
    }
  }, [answered, catIndex])

  const [question, setQuestion] = useState("")
  const [answers, setAnswers] = useState([])
  const [questionTime, setQuestionTime] = useState(false)

  const categoryClick = (index) => {
    setQuestionTime(true)
    setQuestion(questions.categories[index].questions[0].question)
    setAnswers(questions.categories[index].questions[0].answers)
    setCatIndex(index)
  }
  const answerQuestion = (index) => {
    const answer = questions.categories[catIndex].questions[0].answer

    const playerAnswer =
      questions.categories[catIndex].questions[0].answers[index]

    console.log(answer)
    console.log(playerAnswer)

    setAnswered(true)

    if (answer === playerAnswer) {
      //right
      setIsRight(true)

      setScore((p) => p + 1)
    }
  }

  const answerFun = () => {
    setAnswered(false)
    setIsRight(false)

    setQuestionTime(false)
  }

  return (
    <>
      {isPreload ? (
        <div className="container">
          <div className="center preloader">
            <h4>Loading...</h4>
            <Preload />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="center">
            <h3>Quiz game</h3>
            <h4>Score : {score}</h4>

            {answered ? (
              <>
                {isRight ? (
                  <Right fun={answerFun} />
                ) : (
                  <Wrong fun={answerFun} />
                )}
              </>
            ) : (
              <>
                {questionTime ? (
                  <>
                    <h4>Question</h4>
                    <h4>{question}</h4>

                    <div className="row">
                      {answers.map((a, i) => (
                        <div className="col s6">
                          <h4
                            className="answer"
                            key={i}
                            onClick={() => answerQuestion(i)}
                          >
                            {a}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h4>Choose category</h4>

                    <ul className="collection">
                      {questions.categories.map((c, index) => {
                        if (c.questions.length > 0) {
                          return (
                            <li
                              key={index}
                              className="collection-item"
                              onClick={() => categoryClick(index)}
                            >
                              {c.name}
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Game
