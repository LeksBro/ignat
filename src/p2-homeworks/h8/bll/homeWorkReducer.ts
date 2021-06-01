import {ActionType, UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix

            let newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if(a.name < b.name) return -1
                else return 0
            })
          return   action.payload === 'up' ? newState: newState.reverse()
        }
        case 'sortAge': {
            // need to fix
            return state.filter(person => person.age >= action.payload)
        }
        default: return state
    }
}