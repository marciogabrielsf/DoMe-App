import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import * as Icons from "@expo/vector-icons";
import { TabBarButton, TabBarLabel, TabBarView } from "./styles";

interface BottomTabBarProps extends BottomTabBarButtonProps {
	type: "Ionicons" | "FontAwesome5" | "MaterialCommunityIcons";
	label: string;
	unfocusedIcon:
		| typeof Icons.Ionicons
		| typeof Icons.FontAwesome5
		| typeof Icons.MaterialCommunityIcons;
	focusedIcon:
		| typeof Icons.Ionicons
		| typeof Icons.FontAwesome5
		| typeof Icons.MaterialCommunityIcons;
}

export default function TabBarCustomButton({ onFocus, ...props }: BottomTabBarProps) {
	const focused = props.accessibilityState?.selected;

	const activeColor = focused ? "#ffffff" : "#a5a5a5";
	const iconSize = 23;

	return (
		<TabBarView>
			<TabBarButton {...props}>
				{
					{
						Ionicons: (
							<Icons.Ionicons
								name={focused ? props.focusedIcon : props.unfocusedIcon}
								size={iconSize}
								color={activeColor}
							/>
						),
						FontAwesome5: (
							<Icons.FontAwesome5
								name={focused ? props.focusedIcon : props.unfocusedIcon}
								size={iconSize}
								color={activeColor}
							/>
						),
						MaterialCommunityIcons: (
							<Icons.MaterialCommunityIcons
								name={focused ? props.focusedIcon : props.unfocusedIcon}
								size={iconSize}
								color={activeColor}
							/>
						),
					}[props.type]
				}
				<TabBarLabel style={{ color: activeColor }}>{props.label}</TabBarLabel>
			</TabBarButton>
		</TabBarView>
	);
}
