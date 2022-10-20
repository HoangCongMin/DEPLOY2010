// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./Reduce";
// import createSagaMiddleware from "redux-saga";
// import postsSaga from "./Saga/Saga";

// const sagaMiddleware = createSagaMiddleware();
// const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(postsSaga);

// function Mymiddlerware(store){
//     return function(next){
//         return function(action){
//             if(typeof action==='function'){
//                 action(next)
//             }
//             return next(action)
//         }
//     }

// }

// export default Store;
