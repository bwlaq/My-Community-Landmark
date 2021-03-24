import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import landamrkReducer from '../features/landmark/landmarkSlice'
export default configureStore({
    reducer: {
        counter: counterReducer,
        landamrk: landamrkReducer
    }
})