import React, { useContext } from 'react'
import {ExpenseContext} from './../stateManagement/ExpenseProvider'

const Balance = () => {
  const {getBalance} = useContext(ExpenseContext)
  return (
    <div className='balance'>
      <h5>Available Balance </h5>
      <h2>Rs.{getBalance()}.00</h2>
    </div>
  )
}

export default Balance
