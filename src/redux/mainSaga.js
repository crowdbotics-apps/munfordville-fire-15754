import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth28179Saga from '../features/EmailAuth28179/redux/sagas';
import CalendarView28177Saga from '../features/CalendarView28177/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth28179Saga,
CalendarView28177Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}