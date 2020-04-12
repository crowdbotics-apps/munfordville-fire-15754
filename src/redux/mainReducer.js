import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth28179Reducer from '../features/EmailAuth28179/redux/reducers';
import CalendarView28177Reducer from '../features/CalendarView28177/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth28179: EmailAuth28179Reducer,
CalendarView28177: CalendarView28177Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});