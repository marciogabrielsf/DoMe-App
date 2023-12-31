import React, { createContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "@/interfaces/User";
export interface AuthContextData {
	signed: boolean;
	user: IUser | null;
	loading: boolean;
	signUpWithEmail(email: string, password: string, data: object): Promise<void>;
	signInWithEmail(email: string, password: string): Promise<void>;
	signOut(): void;
}

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		const loadStoredData = async () => {
			const user = await AsyncStorage.getItem("@user");
			if (user) {
				setUser(JSON.parse(user));
			}
		};
		if (!user) {
			loadStoredData();
		}

		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	useEffect(() => {
		if (session) getProfile();
	}, [session]);

	const getProfile = async () => {
		if (!session) return;
		setLoading(true);
		try {
			const { data, error, status } = await supabase
				.from("profiles")
				.select("*")
				.eq("id", session?.user.id)
				.single();
			if (data) {
				const email = session.user.email;
				setUser({ email, ...data });
			}
			AsyncStorage.setItem("@user", JSON.stringify(data));
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const signUpWithEmail = async (email: string, password: string, data: object) => {
		setLoading(true);
		try {
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: { data },
			});
			if (error) {
				console.log(error);
				throw error;
			}
		} catch (error) {
			console.log(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const signInWithEmail = async (email: string, password: string) => {
		setLoading(true);
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			setLoading(false);
			throw error;
		}
		setLoading(false);
	};

	const signOut = async () => {
		try {
			await supabase.auth.signOut();
			AsyncStorage.removeItem("@user");
			setUser(null);
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<AuthContext.Provider
			value={{ signed: !!user, user, signInWithEmail, signOut, loading, signUpWithEmail }}
		>
			{children}
		</AuthContext.Provider>
	);
};
