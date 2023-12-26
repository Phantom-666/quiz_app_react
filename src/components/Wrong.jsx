import { useEffect } from "react"
import { wait } from "../utils"

const Wrong = ({ fun }) => {
  const execFun = async () => {
    await wait(2)
    fun()
  }

  useEffect(() => {
    execFun()
  }, [])

  return (
    <div>
      <h4 className="red-text">You are wrong</h4>
    </div>
  )
}

export default Wrong
