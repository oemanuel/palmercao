import 'react-native-gesture-handler';
import React from 'react';
import Flow from './src/navigations';

import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Flow />
    </Provider>
  );
};

export default App;
