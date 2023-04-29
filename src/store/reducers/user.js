import { numberReducer } from "./number"
export function userReducer(state, action) {
    let newState = numberReducer(state, action)

    switch (action.type) {
            case 'login':
                return {...state, user: {name: action.name}}
        default:
            return state
    }
}
