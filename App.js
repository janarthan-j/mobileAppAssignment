/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  View, Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Download from './screens/Download';
import AppRating from './screens/AppRating';
import NewRelease from './screens/NewRelease';
import Subscription from './screens/Subscription';

const Stack = createStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [state, setstate] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Image source={require()} /> */}

      {state == true ?
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Download" component={Download} />
            <Stack.Screen name="Rating" component={AppRating} />
            <Stack.Screen name="New" component={NewRelease} />
            <Stack.Screen name="Subscription" component={Subscription} />

          </Stack.Navigator>

        </NavigationContainer> :
        <Login loginState={state} loginStateUpdate={setstate} />
      }
    </>
    // </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
