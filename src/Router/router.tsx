import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { LoginScreen, ProfileScreen } from '@/src/Views';

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
					options={{
						gestureEnabled: false,
					}}
      	></Stack.Screen>
				<Stack.Screen
          name="Profile"
          component={ProfileScreen}
					options={{
						gestureEnabled: false,
					}}
      	></Stack.Screen>

			</Stack.Navigator>
		</NavigationContainer>
	)
}

export type LoginProps = NativeStackScreenProps<StackParamList, 'Login'>;
export type ProfileProps = NativeStackScreenProps<StackParamList, 'Profile'>;