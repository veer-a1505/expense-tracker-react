import React, { createContext, useState } from 'react'

export const ExpenseContext = createContext()

const ExpenseProvider = (props) => {
  const [transaction, setTransaction] = useState([])

  const addTransaction = ({ title, amount }) => {
    console.log(title, amount)
    const id = Math.floor(Math.random() * 1000)
    setTransaction([...transaction, {id, title, amount}])
  }
  return (<ExpenseContext.Provider value={{ addTransaction }}>{props.children}</ExpenseContext.Provider>)
}

export default ExpenseProvider
