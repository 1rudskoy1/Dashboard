import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const SET__USER = "SET_USER";
const defaultState = {
    skills:[],
    currentUser: null,
    isAuth: false
  }
  
  const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "GET_SKILLS": return {...state,  skills: action}
        case SET__USER:
          console.log(action.payload)
           return state = {
              ...state, currentUser: action.payload, isAuth: true, skills: action.payload.skills 
          }
      default:
        return state
    }
  }


export const GET_SKILLS = skills => ({type: "GET_SKILLS", payload: skills})
export const SET_USER = user => ({type:SET__USER, payload: user})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store