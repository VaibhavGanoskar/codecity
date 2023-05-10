import { UPDATE_BP, UPDATE_DBP, UPDATE_HR, UPDATE_PR, UPDATE_SBP, UPDATE_SR, 
    actionType, stateType } from "./store-types";

export const initalState: stateType[] = [{
    id: 0,
    name: '',
    BP: { value: 0, name: 'Blood Presure' },
    HR: { value: 0, name: 'Heart Rate' },
    SBP: { value: 0, name: 'Sistolic BP' },
    DBP: { value: 0, name: 'Distolic BP' },
    PR: { value: 0, name: 'Pulse Rate' },
    SR: { value: 0, name: 'sugar' },
}
]
// obj[key] = 'new value'
const reducerFunction = (state = initalState, action: any) => {
    switch (action.type) {
        case 'SET_USERS_DATA': 
        return {
            ...action.payload.users
        }
        case 'UPDATE_USER_HEALTH': 
        console.log('state while update', state ,action )
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default reducerFunction;