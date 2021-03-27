import React, { createContext } from 'react'

const ExpenseContext = createContext()

const ExpenseProvider = (props) => {
  return <ExpenseContext.Provider>{props.children}</ExpenseContext.Provider>
}

export default ExpenseProvider
