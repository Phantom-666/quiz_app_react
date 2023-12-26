import { useEffect } from "react"
import { wait } from "../utils"

const Right = ({ fun }) => {
  const execFun = async () => {
    await wait(2)
    fun()
  }

  useEffect(() => {
    execFun()
  }, [])

  return (
    <div>
      <h4 className="green-text">You are right</h4>
    </div>
  )
}

export default Right
