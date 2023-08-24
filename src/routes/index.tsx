import React from "react";
import AppRoutes from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";
import UnloggedRoutes from "./unlogged.routes";
import { useAuth } from "@/hooks/useAuth";
export default function Routes() {
	const { signed } = useAuth();
	// const signed = false;

	return <NavigationContainer>{signed ? <AppRoutes /> : <UnloggedRoutes />}</NavigationContainer>;
}
