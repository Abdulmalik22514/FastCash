import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigation';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@/store/store';
import {HomeProvider} from '@/context/HomeContext';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HomeProvider>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </HomeProvider>
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
}

export default App;
