import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: true, title: "Menu" }} />
			<Stack.Screen name="login" options={{ headerShown: true, title: "Login Validation" }} />
		</Stack>
	);
}
