import React from 'react'

const Transaction = ({transaction}) => {
  return (
      <li>
        <span>{transaction.title}</span>
        <span>{transaction.amount}</span>
        <button>
          <i className="far fa-times-circle"></i>
        </button>
      </li>
  )
}

export default Transaction
