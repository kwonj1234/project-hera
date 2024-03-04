import { useState } from "react"

import { View } from "react-native"
import { TextInput } from "react-native-paper"

export default function LoginScreen() {
	const [username, setUsername] = useState("")
	const [pwd, setPassword] = useState("")

	return (
		<View>
			<TextInput
				value={username}
				onChangeText={text => setUsername(text)}
				mode="outlined"
				placeholder="Username"
			></TextInput>

			<TextInput
				value={pwd}
				onChangeText={text => setPassword(text)}
				mode="outlined"
				placeholder="Password"
			></TextInput>
		</View>
	)
}