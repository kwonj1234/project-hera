import { useState } from "react"

import { View } from "react-native"
import { Button, FAB, TextInput } from "react-native-paper"

import { LoginProps } from "@/src/Router/router"

export default function LoginScreen({navigation}: LoginProps) {

	const [username, setUsername] = useState("")
	const [pwd, setPassword] = useState("")

	const login = () => {
		navigation.navigate("Profile", {userId: "userId"})
	}

	const navigateToSignUp = () => {
		navigation.navigate("SignUp")
	}

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

			<FAB
				label="login"
				uppercase
				onPress={() => login()}
			></FAB>

			<Button
				onPress={() => navigateToSignUp()}
			>
				Sign Up
			</Button>
		</View>
	)
}