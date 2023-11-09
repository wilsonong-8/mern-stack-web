import React, {useEffect, useState, useCallback} from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import { COLORS, icons, images, SIZES } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import BottomMenu from './components/BottomMenu';
import { Register, Login } from './pages';
import { AppProvider, useAppContext } from './context/appContext';
import IconButton from './components/ui/IconButton'
import * as SplashScreen from 'expo-splash-screen'

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  const {logoutUser, user} = useAppContext();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={`Welcome ${user.name}`}
        component={BottomMenu}
        options={{
        headerRight: ({tintColor})=> <IconButton
        icon="exit"
        color={tintColor}
        size={30}
        onPress={() => logoutUser()}
      />}}
      />
    </Stack.Navigator>
  );
};

// SplashScreen.preventAutoHideAsync();

const Navigation = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const {user,token,getUserFromLocalStorage,setAuthUserToken} = useAppContext();

  useEffect(() => {
    async function prepare() {
      try {
        const { token, user } = await getUserFromLocalStorage();
        setAuthUserToken(user,token);
        // await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
    {user && token ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}


const App = () => {
  
  return (
    <>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </>
  );
};

export default App;
