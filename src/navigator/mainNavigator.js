import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps28176Navigator from '../features/Maps28176/navigator';
import Tutorial28175Navigator from '../features/Tutorial28175/navigator';
import Messaging28174Navigator from '../features/Messaging28174/navigator';
import ArticleList28145Navigator from '../features/ArticleList28145/navigator';
import ArticleList28144Navigator from '../features/ArticleList28144/navigator';
import ArticleList28143Navigator from '../features/ArticleList28143/navigator';
import ArticleList28111Navigator from '../features/ArticleList28111/navigator';
import ArticleList28110Navigator from '../features/ArticleList28110/navigator';
import ArticleList28109Navigator from '../features/ArticleList28109/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps28176: { screen: Maps28176Navigator },
Tutorial28175: { screen: Tutorial28175Navigator },
Messaging28174: { screen: Messaging28174Navigator },
ArticleList28145: { screen: ArticleList28145Navigator },
ArticleList28144: { screen: ArticleList28144Navigator },
ArticleList28143: { screen: ArticleList28143Navigator },
ArticleList28111: { screen: ArticleList28111Navigator },
ArticleList28110: { screen: ArticleList28110Navigator },
ArticleList28109: { screen: ArticleList28109Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
