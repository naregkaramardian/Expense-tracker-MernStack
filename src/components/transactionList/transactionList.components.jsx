import React, { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
import {Transaction} from '../transaction/transaction'


export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
  )
}
