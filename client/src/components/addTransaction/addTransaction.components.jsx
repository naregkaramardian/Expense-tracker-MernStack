import React, { useState, useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
import { uuid } from "uuidv4"

export const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setamount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: uuid(),
      text,
      amount: +amount // same as amount; parseInt(amount) the + sign convertss the string to a number
    }

    addTransaction(newTransaction)
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setamount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
