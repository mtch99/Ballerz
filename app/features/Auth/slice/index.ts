import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import { ILoginInput } from '../../../../domain/use-cases/Auth/types'
import { IUserProfileState } from '../../types'

// Define a type for the slice state
export interface IUserStateProfileData {
  id: string,
  username: string
}

export type UserState = {
  email: string,
  profile?: IUserProfileState
} | undefined

export interface ILastSignupInput {
  email: string 
}

export type  AuthState = {
  user: UserState
  lastSignupInput: ILastSignupInput
  lastSigninInput: {
	email: string,
	password: string
  }
}

// Define the initial state using that type
const initialState: AuthState = {
	user: undefined,
	lastSignupInput: {email: ""},
	lastSigninInput: {
		email: '',
		password: ''
	}
};




export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<UserState>) => {
		return {
			...state,
			user: action.payload
		}
    },

    setLastSignupInput: (state: AuthState, action: PayloadAction<{email: string, password: string}>) => {
		return {
			...state,
			lastSignupInput: action.payload
		}
    },

	setLoginInput: (state: AuthState, action: PayloadAction<ILoginInput>) => {
		return {
			...state,
			lastSigninInput: action.payload
		}
    },

	setUserProfile: (state: AuthState, action: PayloadAction<{profile: IUserProfileState}>) => {
		
		if(state.user){
			return {
				...state,
				user: {
					...state.user,
					profile: action.payload.profile
				}
			}
		} else {
			throw new Error("User state is undefined")
		}
		
	}

  }
})




export const { setUser, setLastSignupInput, setLoginInput, setUserProfile } = authSlice.actions


// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user
export const selectAuth = (state: RootState) => state.auth

export const selectLastSignupInput = (state: RootState) => state.auth.lastSignupInput


export default authSlice.reducer