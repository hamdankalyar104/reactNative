import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ComponentName from "./src/screens/ComponentName";
import ListComponent from "./src/screens/ListComponent";
import ImageScreen from "./src/screens/ImageScreen";
import counterScreen from "./src/screens/counterScreen";
import colorChangerScreen from "./src/screens/colorChangerScreen";
import colorAdjustingScreen from "./src/screens/colorAdjustingScreen";
import colorAdjustingScreenWithReducer from "./src/screens/colorAdjustingScreenWithReducer";
import counterScreenWithReducer from "./src/screens/counterScreenWithReducer";
import InputNameScreen from "./src/screens/InputNameScreen";
import BoxScreen from "./src/screens/BoxScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ComponentN : ComponentName,
    List : ListComponent,
    ImageS: ImageScreen,
    counter:counterScreen,
    colorChange:colorChangerScreen,
    colorAdjust : colorAdjustingScreen,
    colorAdjustReducer:colorAdjustingScreenWithReducer,
    counterReducer:counterScreenWithReducer,
    InputName:InputNameScreen,
    Box : BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
