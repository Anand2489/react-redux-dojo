import { combineReducers } from 'redux';

// import purchaseFlowReducer from '../modules/purchaseFlow/ducks/purchaseFlow';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // purchaseFlow: purchaseFlowReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
