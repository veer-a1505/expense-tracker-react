import React, { useContext } from 'react'
import { ExpenseContext } from './../stateManagement/ExpenseProvider'

const Balance = () => {
  const { getBalance } = useContext(ExpenseContext)

  const totalBalance = getBalance()

  return (
    <div className='balance'>
      <h5>Available Balance </h5>
      <h2
        className={
          totalBalance > 0 ? 'savings' : totalBalance < 0 ? 'loss' : 'black'
        }>
        {new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
        }).format(totalBalance)}
      </h2>
    </div>
  )
}

export default Balance
