import {createStore} from "redux"
const defaultState = {
    skills:[[{part: "2", name: "Прыжки", level: 1}, {part: "2", name: "Прыжки", level: 1}, {part: "2", name: "Прыжки", level: 1}]]
  }
  
  const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "GET_SKILLS":
          return {...state}
      default:
        return state
    }
  }
const store = createStore(reducer);
export default store