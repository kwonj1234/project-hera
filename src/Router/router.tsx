import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { LoginScreen, ProfileScreen, UploadScreen } from '@/src/Views';

type StackParamList = {
	Login: undefined;
	Profile: { userId: string };
	Upload: undefined;
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
				<Stack.Screen
          name="Upload"
          component={UploadScreen}
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
export type UploadProps = NativeStackScreenProps<StackParamList, 'Upload'>;