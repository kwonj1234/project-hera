import { useState } from "react";
import { SignUpProps } from "@/src/Router/router";

import { View } from "react-native";
import { TextInput, FAB } from "react-native-paper";

export default function SignUpScreen({navigation} :SignUpProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  
  return (
    <View>
			<TextInput
				value={email}
				onChangeText={text => setEmail(text)}
				mode="outlined"
				placeholder="Email"
			></TextInput>
      <TextInput
				value={password}
				onChangeText={text => setPassword(text)}
				mode="outlined"
				placeholder="Username"
			></TextInput>

      <FAB
				label="Sign Up"
				uppercase
			></FAB>
    </View>
  )
}