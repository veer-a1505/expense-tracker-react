import React, { useContext } from 'react'
import {ExpenseContext} from './../stateManagement/ExpenseProvider'

const Expense = () => {
  const {getTotalExpense} = useContext(ExpenseContext)
  
  let expense = getTotalExpense()


  return (
    <div className='box exp'>
      <p>Expense</p>
      <i className="fas fa-arrow-circle-up"></i> 
      <span> Rs.{expense < 0 ? expense.toString().split('-')[1] : expense }</span>
    </div>
  )
}

export default Expense
