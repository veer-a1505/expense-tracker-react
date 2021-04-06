import React, { useContext } from 'react'
import {ExpenseContext} from './../stateManagement/ExpenseProvider'
import Transaction from './Transaction'

const TransactionList = () => {
  const {transaction} = useContext(ExpenseContext)  



  return (
    <div className='transaction-container'>
      <h2>Transaction Details</h2>
      {
        transaction.map((tran) => (
          <Transaction transaction={tran} key={tran.id} />
        ))
      }
    </div>
  )
}

export default TransactionList
