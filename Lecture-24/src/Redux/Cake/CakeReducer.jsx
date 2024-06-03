import { BUY_CAKE } from "./CakeConstant";

const initialstate = {
    numofcake:10
}
 
 const CakeReducer = (state = initialstate , action) => {
      switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofcake:state.numofcake -1

        }

        default: return state
      } 
 }
 
 export default CakeReducer
 