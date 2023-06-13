const redux=require('redux');

//Making Reducer Function
let reducerFunction=(state={counter:0},action)=>{
    if(action.type=="increment"){
        return {counter:state.counter+1}
    }
    if(action.type=="decrement"){
        return {counter:state.counter-1}
    }
}

//Creating Store
const store=redux.legacy_createStore(reducerFunction);

let counterSubscriber=()=>{
    console.log(store.getState());
}

//Component subscibe to store
store.subscribe(counterSubscriber);

//Dispatch the action
store.dispatch({type:"increment"});
