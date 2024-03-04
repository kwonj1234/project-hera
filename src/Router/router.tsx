import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { LoginScreen } from '@/src/Views';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
          name="Home"
          component={LoginScreen}
      	></Stack.Screen>

				
			</Stack.Navigator>
		</NavigationContainer>
	)
}