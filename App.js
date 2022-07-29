import TelaPrincipal from './screens/TelaPrincipal';
import TelaCamera from "./screens/TelaCamera";
import TelaGaleria from "./screens/TelaGaleria";
import TelaColebar from "./screens/TelaColebar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaMapa from './screens/TelaMapa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaPrincipal'>
        <Stack.Screen name ="TelaPrincipal" component={TelaPrincipal} options={{headerShown:false}} />
        <Stack.Screen name ="TelaCamera" component={TelaCamera}/>
        <Stack.Screen name ="TelaGaleria" component={TelaGaleria}/>
        <Stack.Screen name ="TelaColebar" component={TelaColebar}/>
        <Stack.Screen name ="TelaMapa" component={TelaMapa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}