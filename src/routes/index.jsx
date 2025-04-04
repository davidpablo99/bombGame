import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../pages/Start";
import Rules from "../pages/Rules";
import PlayAlone from "../pages/PlayAlone/index.jsx";
import PlayTogether from "../pages/PlayTogether/index.jsx";
import Disarmed from "../pages/Disarmed/index.jsx";
import Exploded from "../pages/Exploded/index.jsx";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Start" component={Start}/>
                <Stack.Screen name="Rules" component={Rules}/>
                <Stack.Screen name="PlayAlone" component={PlayAlone}/>
                <Stack.Screen name="PlayTogether" component={PlayTogether}/>
                <Stack.Screen name="Exploded" component={Exploded}/>
                <Stack.Screen name="Disarmed" component={Disarmed}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}