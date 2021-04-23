import React from 'react'
import { createStore, combineReducers } from 'redux'
import todoReducer from './reducer'
const reducers = combineReducers({ mortadha: todoReducer })

const store = createStore(reducers)

export { store }
