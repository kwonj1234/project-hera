import { useState } from "react";
import { supabase } from "@/src/lib/supabase";

import { SignUpProps } from "@/src/router";

import { View } from "react-native";
import { TextInput, FAB } from "react-native-paper";


export default function SignUpScreen({navigation} :SignUpProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if (error) alert(error.message);
    setLoading(false);
  }

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
				placeholder="Password"
			></TextInput>

      <FAB
				label={loading ? "Creating Account..." : "Create Account"}
        disabled={loading}
				uppercase
        onPress={() => signUpWithEmail()}
			></FAB>
    </View>
  )
}