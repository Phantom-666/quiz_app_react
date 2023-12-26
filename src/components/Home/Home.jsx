import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const nav = useNavigate()

  const startGame = () => {
    nav("/game")
  }

  return (
    <>
      <div className="container">
        <div className="center">
          <h4>Quiz game</h4>

          <button className="btn" onClick={startGame}>
            Start game
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
