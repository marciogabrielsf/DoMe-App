import { FlatList, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import {
	Background,
	BottomTextBoxView,
	KeyboardAvoid,
	MessageContainer,
	MessageView,
	MicrophoneBarIcon,
	SendButtonIcon,
	SendButtonView,
	TextBox,
	TouchableButton,
} from "./styles";
import Message from "./components/message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useMessage } from "@/hooks/useMessage";
import * as Haptics from "expo-haptics";
import { useHeaderHeight } from "@react-navigation/elements";
export interface Message {
	id: number;
	text: string;
	date: Date;
	fromDome?: boolean;
}

export default function AddPage() {
	const [text, setText] = React.useState("");
	const [messages, setMessages] = React.useState<Message[]>([]);

	let insets = useSafeAreaInsets();

	const headerHeight = useHeaderHeight();
	const { isLoading, mutateAsync } = useMessage();

	useEffect(() => {
		async function getMessages() {
			AsyncStorage.getItem("messages").then((data) => {
				if (data) {
					setMessages(JSON.parse(data));
				}
			});
		}
		getMessages();
	}, []);

	useEffect(() => {
		AsyncStorage.setItem("messages", JSON.stringify(messages));
	}, [messages]);

	const sendMessage = async () => {
		if (text.length > 0) {
			try {
				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
				const newMessage = {
					id: messages.length + 1,
					text: text,
					date: new Date(),
					fromDome: false,
				};
				const temp = [newMessage, ...messages];
				setMessages(temp);
				setText("");
				const response = (await mutateAsync({ message: text })).message;
				console.log(response);
				const newMessageDome = {
					id: temp.length + 1,
					text: response,
					date: new Date(),
					fromDome: true,
				};
				setMessages([newMessageDome, ...temp]);
			} catch (err) {
				// alert(err);
			}
		}
	};

	const FlatListRef = useRef<FlatList>();

	const renderItem = useCallback(({ item }) => {
		return <Message text={item.text} date={item.date} fromDome={item.fromDome} />;
	}, []);

	return (
		<Background>
			<MessageContainer
				inverted
				ref={FlatListRef}
				onScrollToIndexFailed={() => {}}
				contentContainerStyle={{
					paddingTop: headerHeight,
					paddingBottom: insets.bottom + 80,
					paddingHorizontal: 10,
				}}
				data={messages}
				initialNumToRender={10}
				keyExtractor={(item) => String(item.id)}
				renderItem={renderItem}
				windowSize={11}
				removeClippedSubviews={true}
			/>
			<KeyboardAvoid>
				<MessageView>
					<BottomTextBoxView>
						<TextBox value={text} onChangeText={setText} />
						<TouchableButton>
							<MicrophoneBarIcon />
						</TouchableButton>
						<TouchableButton onPress={sendMessage} disabled={isLoading}>
							<SendButtonView isLoading={isLoading}>
								{isLoading ? <ActivityIndicator color="white" /> : <SendButtonIcon />}
							</SendButtonView>
						</TouchableButton>
					</BottomTextBoxView>
				</MessageView>
			</KeyboardAvoid>
		</Background>
	);
}
