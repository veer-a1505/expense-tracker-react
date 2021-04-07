import React, { useContext } from 'react'
import {ExpenseContext} from './../stateManagement/ExpenseProvider'

const Transaction = ({transaction}) => {
  const {removeTransaction} = useContext(ExpenseContext)
  const sign = transaction.amount > 0 ? '+' : null 

  return (
      <li className='transaction' >
        <span className={transaction.role === 'income' ? 'income' :'expense'}></span>
        <span className='transaction-title' >{transaction.title}</span>
        <span className='transaction-amount'>Rs.{sign}{transaction.amount.toFixed(2)}</span>
        <button className='dlt-trn' onClick={ () => removeTransaction(transaction.id)}>
          <i className="fas fa-times"></i>
        </button>
      </li>
  )
}

export default Transaction
