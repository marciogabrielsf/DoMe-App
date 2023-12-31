import { AuthContextData } from "@/contexts/auth";
import { useAuth } from "@/hooks/useAuth";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export const appSettings = [
	{
		label: "Conversations",
		settings: [
			{
				label: "Change Language",
				icon: <MaterialIcons name="translate" size={22} color="#FFF" />,
			},
			{
				label: "Clear all conversations",
				icon: <Ionicons name="trash-outline" size={22} color="#FFF" />,
				action: (_auth, navigator) => {
					navigator.navigate("addPage");
				},
			},
		],
	},

	{
		label: "Help",
		settings: [
			{
				label: "Contact us",
				icon: <Ionicons name="mail-outline" size={22} color="#FFF" />,
			},
			{
				label: "Sign Out",
				icon: <Ionicons name="exit-outline" size={22} color="#FFF" />,
				action: (auth: AuthContextData) => auth.signOut(),
			},
		],
	},
];
