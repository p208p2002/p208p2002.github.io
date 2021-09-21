let defaultState = {

}

export default function rootReducer(state=defaultState, action) {
    console.log(state,action)
    if(action.type === 'SET_APP_MODE'){
        return Object.assign({},state,{
            appMode:action.mode
        })
    }
    return state // In case an action is passed in we don't understand
  }