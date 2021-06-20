import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from './src/navigation/RootNavigation';
import { Provider } from "react-redux";
import store from "./src/rematch/store";

const App = () => {


  return (
    <NavigationContainer>
      <Provider store={store}>

        <Root />
      </Provider>

    </NavigationContainer>






  );
};



export default App;
