import { View, Text } from "react-native";
import React from "react";
import { HourDate, MessageText, MessageView } from "./styles";

interface MessageProps {
	text: string;
	date: Date;
	fromDome?: boolean;
}

export default function Message({ text, date, fromDome }: MessageProps) {
	const newMessageDate = new Date(date);

	const messageDate = newMessageDate.toLocaleTimeString("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
	});

	const parsedText = text.replace(/(<([^>]+)>)/gi, "");

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
			<MessageText>{parsedText}</MessageText>
			<HourDate>{messageDate}</HourDate>
		</MessageView>
	);
}
