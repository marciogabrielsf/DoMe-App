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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { useConversation } from "@/contexts/conversation";
import { useIsFocused } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function AddPage() {
	const [text, setText] = React.useState("");
	const FlatListRef = useRef<FlatList>();

	let insets = useSafeAreaInsets();

	const { messages, sendMessage, isLoading } = useConversation();

	const headerHeight = useHeaderHeight();
	const sendMessageHandle = async () => {
		if (text.length > 0) {
			try {
				FlatListRef.current.scrollToOffset({ animated: true, offset: -9999 });
				setText("");
				await sendMessage(text);
			} catch (err) {
				alert(err);
			}
		}
	};

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
				initialNumToRender={5}
				// keyExtractor={(item) => String(item.id)}
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
						<TouchableButton onPress={sendMessageHandle} disabled={isLoading}>
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
