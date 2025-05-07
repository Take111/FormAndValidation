import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.menuList}>
				<Link href="/login" asChild>
					<TouchableOpacity style={styles.menuItem}>
						<View style={styles.menuItemContent}>
							<Text style={styles.menuText}>Login Validation</Text>
							<Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
						</View>
					</TouchableOpacity>
				</Link>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F2F2F7",
	},
	menuList: {
		backgroundColor: "#FFFFFF",
		marginTop: 20,
		marginHorizontal: 20,
		borderRadius: 10,
	},
	menuItem: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#C7C7CC",
	},
	menuItemContent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 16,
	},
	menuText: {
		fontSize: 17,
		color: "#000000",
	},
});
