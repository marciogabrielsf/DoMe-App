import React, { createContext, useEffect, useState } from "react";
import * as AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
	signed: boolean;
	user: object | null;
	loading: boolean;
	signIn(): Promise<void>;
	signOut(): void;
}

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<object | null>(null);
	const [signedIn, setSignedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const loadStoredData = async () => {
			// const storedUser = await AsyncStorage.useAsyncStorage("@RNAuth:user").getItem();
			const signedIn = await AsyncStorage.useAsyncStorage("signedIn").getItem();
			if (signedIn) {
				setSignedIn(Boolean(signedIn));
			}
			setLoading(false);
		};
		loadStoredData();
	});

	const signIn = async () => {
		await AsyncStorage.useAsyncStorage("signedIn").setItem("true");
		setSignedIn(true);
	};
	const signOut = async () => {
		setSignedIn(false);
		await AsyncStorage.useAsyncStorage("signedIn").setItem("false");
	};

	return (
		<AuthContext.Provider value={{ signed: signedIn, user, signIn, signOut, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
