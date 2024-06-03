const redux = require('redux')
const createstore = redux.createStore

/* constant */

const BUY_ICECREAME = 'BUY_ICECREAME'

function buy_icecreame(){
    return{
        type:BUY_ICECREAME,
        info:'first redux action'
    }
}

const initialstate = {
    numoficecreame : 20
}

const reducer = (state = initialstate , action) => {
    switch(action.type){
        case BUY_ICECREAME: return {...state , numoficecreame:state.numoficecreame - 1}
        default: return state 
    }
}

const store = redux.createStore(reducer)

console.log('initial state' , store.getState());

store.subscribe(() => console.log('updated state' , store.getState()))

store.dispatch(buy_icecreame())

store.dispatch(buy_icecreame())
