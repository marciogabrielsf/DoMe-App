import { AuthContextData } from "@/contexts/auth";
import theme from "@/themes/theme";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Alert } from "react-native";

export const appSettings = [
	{
		label: "Chat",
		settings: [
			{
				label: "Change Language",
				icon: <MaterialIcons name="translate" size={22} color={theme.colors.iconColor} />,
				action: (_auth, navigator) => {},
			},
			{
				label: "Clear all conversations",
				icon: <Ionicons name="trash-outline" size={22} color={theme.colors.iconColor} />,
				action: (_auth, navigator) => navigator.navigate("clearAllConversations"),
			},
		],
	},

	{
		label: "Help",
		settings: [
			{
				label: "Contact us",
				icon: <Ionicons name="mail-outline" size={22} color={theme.colors.iconColor} />,
			},
			{
				label: "Sign Out",
				icon: <Ionicons name="exit-outline" size={22} color={theme.colors.iconColor} />,
				action: (auth: AuthContextData) =>
					Alert.alert("Sign Out", "Are you sure you want to sign out?", [
						{ text: "Cancel" },
						{ text: "Sign Out", onPress: () => auth.signOut(), style: "destructive" },
					]),
			},
		],
	},
];
