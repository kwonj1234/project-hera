import { View, Text } from "react-native"
import { ProfileProps } from "@/src/Router/router"

import { Button } from "react-native-paper"

export default function ProfileScreen({route, navigation}: ProfileProps) {
	const navigateToUpload = () => {
		navigation.navigate("Upload")
	}
  return (
		<View>
			<Text>Hello USER</Text>
			<Button
				onPress={() => navigateToUpload()}
			>
				Upload
			</Button>
		</View>
	)
}