import {Increment,Decrement} from './actions';

const initstate={
    count:0
}
export const reducer=(state=initstate,action)=>{
    switch(action.type){
        case Increment:{
            console.log("i");
            return {...state,count:state.count+1};
            // break;
        }
        
        case Decrement:{
            return {...state,count:state.count-1};
            // break;
        }
        default:
            return state;
    }
}