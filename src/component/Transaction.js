import React, { useContext } from 'react'
import { ExpenseContext } from './../stateManagement/ExpenseProvider'

const Transaction = ({ transaction }) => {
  const { removeTransaction } = useContext(ExpenseContext)
  const sign = transaction.amount > 0 ? '+' : null

  return (
    <li className='transaction'>
      <div className='child1'>
        <span>{transaction.title}</span>
      </div>

      <div className='child2'>
        <span
          className={
            transaction.role === 'income' ? 'income' : 'expense'
          }></span>
      </div>

      <div className='child3'>
        <span>
          Rs.{sign}
          {transaction.amount.toFixed(2)}
        </span>
      </div>

      <div className='child4'>
        <button
          className='dlt-btn'
          onClick={() => removeTransaction(transaction.id)}>
          <i className='fas fa-times'></i>
        </button>
      </div>
    </li>
  )
}

export default Transaction
