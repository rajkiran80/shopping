import {createStore} from 'redux'

const reducer=(state={cartSize:0,allProductsId:[]},action)=>{
      if(action.type === "CARTSIZE"){
          state.cartSize=action.cartSize
          state.allProductsId=[...state.allProductsId,action.prodId]
      }
      return state
}
const store=createStore(reducer)
export default store