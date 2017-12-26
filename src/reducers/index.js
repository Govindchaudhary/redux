import { combineReducers } from 'redux';
import library_reducer from './library_reducer';
import selectedLibrary_reducer from './selectedLibrary_reducer';


 const allReducers = combineReducers({
    libraries:library_reducer,
    selectedLibraryId:selectedLibrary_reducer
});

export default allReducers;