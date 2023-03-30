import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import eventReducer from './slices/event';
import ticketReducer from './slices/ticket';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  event:eventReducer,
  ticket:ticketReducer
});

export { rootPersistConfig, rootReducer };
