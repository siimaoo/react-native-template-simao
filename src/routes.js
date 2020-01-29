import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import MainScreen from './mainScreen/index'

const Routes = createAnimatedSwitchNavigator(
  { 
   MainScreen: MainScreen
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="fade"
          durationMs={0}
          interpolation="easeIn"
        />
        <Transition.In type="scale" durationMs={300} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(Routes);