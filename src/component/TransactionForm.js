import React, { useState, useContext } from 'react'
import { ExpenseContext } from '../stateManagement/ExpenseProvider'

const TransactionForm = () => {
  const { addTransaction } = useContext(ExpenseContext)
  const [data, setData] = useState({
    title: '',
    amount: '',
  })

  const setRoleProperty = (obj) => {
    const { amount } = obj

    if (amount.startsWith('-')) {
      obj.role = 'expense'
    } else {
      obj.role = 'income'
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (data) {
      setRoleProperty(data)
      addTransaction(data)
    }
    setData({ title: '', amount: '' })
  }

  return (
    <div>
      <div className='form-header'>
        <h2>Add new transaction </h2>
        <span>( positive amount - income, negative amount - expense )</span>
      </div>
      <hr />
      <form onSubmit={handleSubmit} className='form-container'>
        <input
          type='text'
          pattern='[a-zA-Z]+'
          placeholder='Add title'
          title='Traction title should only contains text e.g. salray'
          required
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          autoFocus
        />

        <input
          type='number'
          placeholder='Amount'
          value={data.amount}
          required
          onChange={(e) => setData({ ...data, amount: e.target.value })}
        />

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default TransactionForm
