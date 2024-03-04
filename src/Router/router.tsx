import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { LoginScreen } from '@/src/Views';

type StackParamList = {
	Login: undefined;
	Profile: { userId: string };
  };

const Stack = createNativeStackNavigator<StackParamList>();

export default function Router() {
  return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
          name="Login"
          component={LoginScreen}
      	></Stack.Screen>


			</Stack.Navigator>
		</NavigationContainer>
	)
}

export type LoginProps = NativeStackScreenProps<StackParamList, 'Login'>;
export type ProfileProps = NativeStackScreenProps<StackParamList, 'Profile'>;