import{BUY_CHOCO} from'./ChocoConstant'

const initialstate ={
    numofchoco: 10
}

const ChocoReducer = (state = initialstate ,action) => {
    switch(action.type){
        case BUY_CHOCO: return{
            ...state,
             numofchoco:state.numofchoco -1
        }

        default: return state
      } 
 
}

export default ChocoReducer

