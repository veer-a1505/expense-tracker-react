import React, { useContext } from 'react'
import {ExpenseContext} from './../stateManagement/ExpenseProvider'
import Transaction from './Transaction'

const TransactionList = () => {
  const {transaction} = useContext(ExpenseContext)  

  return (
    <div>
      <div className='transaction-header'>
        <h2>Transaction Details</h2>
      </div>
      <hr></hr>
    <div className='transaction-container'>
      {
        transaction.map((tran) => (
          <Transaction transaction={tran} key={tran.id} />
        ))
      }
    </div>
    </div>
  )
}

export default TransactionList
