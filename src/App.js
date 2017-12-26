import React from 'react';
import {View} from 'react-native';
import Header from './Components/Header';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers'
import LibraryList from './Components/LibraryList';




const App = () =>{
    const store = createStore(allReducers);
    return(
        <Provider store = {store}>
            <View>
            <Header headerText={'TechStack'}/>
            <LibraryList/>

            </View>   

        </Provider>
        
    );
};

export default App;