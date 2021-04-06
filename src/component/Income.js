import React, { useContext }  from 'react'
import {ExpenseContext} from './../stateManagement/ExpenseProvider'

const Income = () => {
  const {getTotalIncome} = useContext(ExpenseContext)

  return (
    <div className='box inc'>
      <p>Income</p>
      <i className="fas fa-arrow-circle-down"></i> 
      <span> Rs.{getTotalIncome()}</span>
    </div>

  )
}

export default Income
