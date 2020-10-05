import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Welcome from '../screens/welcome';
import  Settings  from '../screens/settings';

const screens = {
    
    Welcome : {
        screen : Welcome,
        navigationOptions: {
            headerShown: false,
          }
    },
    Home : {
        screen : Home,
        navigationOptions: {
           // headerShown: false,
          },
    },
    Settings : {
        screen : Settings,
        navigationOptions: {
         //   headerShown: false,
          }
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);