import React from 'react'

const Transaction = ({transaction}) => {
  const sign = transaction.role === 'income'  ? '+' : '-'
  return (
      <li className='transaction' >
        <span className={transaction.role === 'income' ? 'income' :'expense'}></span>
        <span className='transaction-title' >{transaction.title}</span>
        <span className='transaction-amount'>Rs.{transaction.amount}</span>
        <button className='dlt-trn'>
          <i className="fas fa-times"></i>
        </button>
      </li>
  )
}

export default Transaction
