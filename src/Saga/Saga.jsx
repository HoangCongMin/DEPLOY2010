// import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
// import { getPostData } from "../Postapi/Postapi";
// import { Flogin, FloginSuccess } from "../Action/LoginuserAction";
// import { LOG_OUT, LOG_IN_REQUEST, LOG_IN_SUCCESS } from "../Constant/Constant";

// function* getListPostSaga(action) {
//   try {
//     const response = yield call(getPostData, action.payload);
//     const { token } = response.data;

//     yield put(FloginSuccess(response));
//     localStorage.setItem("token", token);
//     window.location.reload();
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* postsSaga() {
//   yield takeLatest(LOG_IN_REQUEST, getListPostSaga);
// }

// export default postsSaga;
