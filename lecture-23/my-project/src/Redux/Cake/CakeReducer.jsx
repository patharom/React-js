import { BUY_CAKE } from './CakeConstant'

const initialState = {
    numofcake : 10
}

const CakeReducer = (state = initialState , action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numofcake : state.numofcake -1,
                
            }
        default: return state
    }
}

export default CakeReducer



