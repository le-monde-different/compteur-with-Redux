import { INCREMENT } from "../actions/Types";
import { DECREMENT } from "../actions/Types";
const count=0
const CountReducer=(state=count,action)=>{
    switch(action.type){
                case INCREMENT :
                 return   state+1 ;
                 case DECREMENT:
                    return state-1;

                    default :  return state  
        
            }
}


export default CountReducer