import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './screens/login/Login';
import Register from './screens/register/Register'
import Home from './screens/home/Home'
import Profile from './screens/profile/Profile'
import Stories from './screens/stories/Stories'
import FullStory from './screens/fullStory/FullStory'
import { Header } from 'react-native/Libraries/NewAppScreen';


const AuthStack = createStackNavigator(
    {
      LoginScreen: Login,
      RegisterScreen: Register,
    },
    {
      initialRouteName: 'LoginScreen',
    },
    
);

const HomeStack = createStackNavigator(
  {
    HomeScreen: Home,
  
  }
);

const StoriesStack = createStackNavigator(
  {
    StoriesScreen: Stories,
    FullStoryScreen: FullStory,
  
  }, {
    initialRouteName: 'StoriesScreen',
  },
  
);

const ProfileStack = createStackNavigator(
  {
    ProfileScreen: Profile,
  
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Stories: StoriesStack,
  Profile: ProfileStack,
});

const FinalNavigator = createStackNavigator(
  {
    Auth: AuthStack,
    TabNavigator: TabNavigator
  
  },
  {
    headerMode:'none',
      navigationOptions:{
        header:null
      }
  }

);


export default createAppContainer(FinalNavigator);