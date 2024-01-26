import Welcome from './Pages/WelcomPage/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './Pages/SignUpPage/SignUp';
import Login from './Pages/LoginPage/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen 
          name='Welcome'
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='SignUp'
          component={SignUp}
          options={{
            headerShown: false,
            headerStyle:{
              backgroundColor: '#f4511e',
            },  
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name='Login'
          component={Login}
          options={{
            headerShown: false,
            headerStyle:{
              backgroundColor: '#f4511e',
            },  
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}