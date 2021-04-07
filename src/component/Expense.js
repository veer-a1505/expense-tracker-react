import React, { useContext } from 'react'
import {ExpenseContext} from './../stateManagement/ExpenseProvider'

const Expense = () => {
  const {getTotalExpense} = useContext(ExpenseContext)
  
  return (
    <div className='box exp'>
      <p>Expense</p>
      <i className="fas fa-arrow-circle-up"></i> 
      <span> Rs.{getTotalExpense()}</span>
    </div>
  )
}

export default Expense
