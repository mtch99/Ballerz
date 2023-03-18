import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'

// Define a type for the slice state
export interface IUserStateProfileData {
  id: string,
  username: string
}

export type UserState = {
  email: string,
  profileData?: IUserStateProfileData
} | undefined

export interface ILastSignupInput {
  email: string 
}

export type  AuthState = {
  user: UserState
  lastSignupInput: ILastSignupInput
}

// Define the initial state using that type
const initialState: AuthState = {
	user: undefined,
	lastSignupInput: {email: ""}
};




export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<UserState>) => {
        state.user = action.payload
    },
    setLastSignupInput: (state: AuthState, action: PayloadAction<{email: string}>) => {
		state.lastSignupInput = action.payload
    }
  }
})




export const { setUser, setLastSignupInput } = authSlice.actions


// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user
export const selectLastSignupInput = (state: RootState) => state.auth.lastSignupInput


export default authSlice.reducer