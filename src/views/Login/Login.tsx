import { useState } from "react"
import { supabase } from "@/src/lib/supabase";

import { View } from "react-native"
import { Button, FAB, TextInput } from "react-native-paper"

import { LoginProps } from "@/src/router"

export default function LoginScreen({navigation}: LoginProps) {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false);

	const login = () => {
		navigation.navigate("Profile", {userId: "userId"})
	}

	const navigateToSignUp = () => {
		navigation.navigate("SignUp")
	}
  
  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    if (error) alert(error.message);
    setLoading(false);
		if (!error) login()
  }

	return (
		<View>
			<TextInput
				value={email}
				onChangeText={text => setEmail(text)}
				mode="outlined"
				placeholder="Username"
			></TextInput>

			<TextInput
				value={password}
				onChangeText={text => setPassword(text)}
				mode="outlined"
				placeholder="Password"
			></TextInput>

			<FAB
				label={loading ? "Logging In..." : "Login"}
				uppercase
				disabled={loading}
				onPress={() => login()}
			></FAB>

			<Button
				onPress={() => signInWithEmail()}
				disabled={loading}
			>
				Sign Up
			</Button>
		</View>
	)
}