import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';


import AlbumsContainer from './src/components/AlbumsContainer';
import * as reducers from './src/store/reducers'
 
const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk)),
);
 const App = () => {
  

   return (
    <Provider store={store}>
      <SafeAreaView>
        <AlbumsContainer />
      </SafeAreaView>
    </Provider>
   );
 };


 export default App;
