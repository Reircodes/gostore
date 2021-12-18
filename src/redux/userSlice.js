import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({


    name : 'user',
    initialState : {
        user: null
    }
    
     ,
    reducers : {
        addUser : (state , action) => {
            const newUser = {
                user : action.payload.user
            }
            state.push(newUser)
        } , 
       
        
    }

  
})


export const { addUser} = userSlice.actions;

export default userSlice.reducer ;
