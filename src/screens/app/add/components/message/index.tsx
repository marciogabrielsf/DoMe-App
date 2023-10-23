import { View, Text } from "react-native";
import React from "react";
import { MessageText, MessageView } from "./styles";

interface MessageProps {
	text: string;
	date: Date;
	fromDome?: boolean;
}

export default function Message({ text, date, fromDome }: MessageProps) {
	return (
		<MessageView
			from={{
				opacity: 0,
				translateY: 50,
			}}
			animate={{
				opacity: 1,
				translateY: 0,
			}}
			transition={{
				type: "timing",
				duration: 250,
			}}
			fromDome={fromDome}
		>
			<MessageText>{text}</MessageText>
		</MessageView>
	);
}
