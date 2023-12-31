import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";

type ReactQueryProps = {
	children: ReactNode;
};

export default function ReactQueryProvider({ children }: ReactQueryProps) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
