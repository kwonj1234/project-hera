import { View, Text } from "react-native"
import { ProfileProps } from "@/src/Router/router"

export default function ProfileScreen({route, navigation}: ProfileProps) {
  return (
		<View>
			<Text>Hello USER</Text>
		</View>
	)
}