import { produce } from 'immer'
import { create } from 'zustand'

// this is a simple example of a user store using Zustand and Immer.

// const initialState = {
// 	user: {
// 		id: 0,
// 		friends: [],
// 		profile: {
// 			name: '',
// 			age: 0,
// 			email: '',
// 			address: {
// 				street: '',
// 				city: '',
// 				state: '',
// 				zip: ''
// 			}
// 		}
// 	}
// }

type User = {
	id: number
	friends: string[]
	profile: {
		name: string
		age: number
		email: string
		address: {
			street: string
			city: string
			state: string
			zip: string
		}
	}
}

interface UserState {
	user: User
}

export const useUserStore = create<UserState>(set => ({
	user: {} as User,
	updateAddressStreet: (street: string) =>
		set(state => ({
			user: {
				...state.user,
				profile: {
					...state.user.profile,
					address: {
						...state.user.profile.address,
						street: street
					}
				}
			}
		})),
	updateAddressStreetImmer: (street: string) =>
		set(
			produce(state => {
				state.user.profile.address.street = street
			})
		)
}))
