import React, { useContext } from 'react'
import { ExpenseContext } from './../stateManagement/ExpenseProvider'

const Expense = () => {
  const { getTotalExpense } = useContext(ExpenseContext)

  let expense = getTotalExpense()

  const actualExp = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(expense)

  console.log(actualExp)

  return (
    <div className='box exp'>
      <p>Expense</p>
      <i className='fas fa-arrow-circle-up'></i>
      <span>
        {' '}
        {actualExp < 0 ? actualExp.toString().split('-')[1] : actualExp}
      </span>
    </div>
  )
}

export default Expense
