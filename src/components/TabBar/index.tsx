import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import { TabBarButton, TabBarLabel, TabBarView } from "./styles";
import { Ionicons } from "@expo/vector-icons";
// @ts-ignore

export function AnimatedTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	return (
		<TabBarView>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;
				const icon = options.tabBarIcon;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						// @ts-ignore
						navigation.navigate({ name: route.name, merge: true });
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TabBarButton
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
					>
						{icon}
						<TabBarLabel style={{ color: isFocused ? "#ffffff" : "#a5a5a5" }}>{label}</TabBarLabel>
					</TabBarButton>
				);
			})}
		</TabBarView>
	);
}
