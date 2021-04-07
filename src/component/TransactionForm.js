import React, { useState, useContext } from 'react'
import { ExpenseContext } from '../stateManagement/ExpenseProvider'

const TransactionForm = () => {
  const { addTransaction } = useContext(ExpenseContext)
  const [data, setData] = useState({
    title: "",
    amount: ""
  })

  const updateField = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const setRoleProperty = (obj) => {
    const {amount} = obj

    if(amount.startsWith('-')) {
      obj.role = 'expense'
    } else {
      obj.role = 'income'
    }
  } 


  const handleSubmit = (event) => {
    event.preventDefault()
    setRoleProperty(data)
    addTransaction(data)            
  }

  return (
    <div>
    <div className='form-header'>
      <h2>Add new transaction </h2>
      <span>( positive - income, negative - expense )</span>
    </div>
    <hr></hr>
    <form onSubmit={handleSubmit} className='form-container'>
      <input type='text' placeholder='Add title' name="title" onChange={updateField} autoFocus ></input>
      <input type='number' placeholder='Enter an amount' name="amount" onChange={updateField} ></input>
      <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default TransactionForm
