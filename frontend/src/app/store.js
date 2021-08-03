import { configureStore } from '@reduxjs/toolkit'
import memberReducer from './reducer'

export default configureStore({
  reducer: {
    member: memberReducer
  }
})