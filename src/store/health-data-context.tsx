import { createContext, useReducer } from "react";
import styless from './HealthData.module.scss';
import { stateType } from "./store-types";
import reducerFunction, { initalState } from "./reducer-store";





const HealthDataContext = createContext({
    users: initalState
})

const ReducerFunc = (state= initalState, action: any) => {
    switch (action.type) {
        case 'value':
            
            break;
    
        default:
            break;
    }
}
export const HealthDataContextWrapper:React.FC<any> = (props) => {

    const [state,dispatch] = useReducer(reducerFunction , initalState)

    const { children } = props
    return (
        <HealthDataContext.Provider value={
           { users:state}
        }>
        <div className={styless["container-main"]}>
            {children}
        </div>
        </HealthDataContext.Provider>
      
    )
}




export default HealthDataContext;