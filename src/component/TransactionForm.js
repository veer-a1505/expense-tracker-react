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

  const handleSubmit = (event) => {
    event.preventDefault()
    addTransaction(data)
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input type='text' placeholder='Add Title' name="title" onChange={updateField} ></input>
      <input type='number' placeholder='Enter Amount' name="amount" onChange={updateField}></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default TransactionForm
