import { LoginSchema } from "@/schema/form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: valibotResolver(LoginSchema),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});
	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View style={styles.form}>
				<Text>Name</Text>
				<Controller
					control={control}
					name="name"
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							onChangeText={onChange}
							onBlur={onBlur}
							value={value}
							placeholder="Name"
							style={styles.input}
						></TextInput>
					)}
				/>
				<Text style={styles.errorText}>{errors.name?.message}</Text>
			</View>
			<View style={styles.form}>
				<Text>Email</Text>
				<Controller
					control={control}
					name="email"
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="email-address"
							onChangeText={onChange}
							onBlur={onBlur}
							value={value}
							placeholder="Email"
							style={styles.input}
						></TextInput>
					)}
				/>
				<Text style={styles.errorText}>{errors.email?.message}</Text>
			</View>
			<View style={styles.form}>
				<Text>Password</Text>
				<Controller
					control={control}
					name="password"
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							secureTextEntry
							onChangeText={onChange}
							onBlur={onBlur}
							value={value}
							placeholder="Password"
							style={styles.input}
						></TextInput>
					)}
				/>
				<Text style={styles.errorText}>{errors.password?.message}</Text>
			</View>
			<TouchableOpacity
				onPress={handleSubmit(onSubmit)}
				disabled={!isValid}
				style={[styles.button, isValid ? styles.buttonEnabled : styles.buttonDisabled]}
				activeOpacity={0.7}
			>
				<Text style={[styles.buttonText, isValid ? styles.buttonTextEnabled : styles.buttonTextDisabled]}>
					Submit
				</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},
	form: {
		gap: 10,
	},
	input: {
		width: "100%",
		height: 40,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding: 10,
	},
	errorText: {
		color: "red",
	},
	button: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		alignItems: "center",
		marginTop: 20,
	},
	buttonEnabled: {
		backgroundColor: "#007AFF",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	buttonDisabled: {
		backgroundColor: "#CCCCCC",
		shadowOpacity: 0,
		elevation: 0,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "600",
	},
	buttonTextEnabled: {
		color: "white",
	},
	buttonTextDisabled: {
		color: "#666666",
	},
});
