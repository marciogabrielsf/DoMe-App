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
import RecognitionModal from "./components/recognitionModal";

export default function AddPage() {
	const [text, setText] = React.useState("");
	const [isModalVisible, setIsModalVisible] = React.useState(false);
	const FlatListRef = useRef<FlatList>();

	const {
		messages,
		sendMessage,
		isLoading,
		clearRecording,
		startRecording,
		endRecoding,
		recordingResult,
		isRecording,
	} = useConversation();

	let insets = useSafeAreaInsets();

	const headerHeight = useHeaderHeight();

	const handleModalOpen = async () => {
		setIsModalVisible(true);
		await startRecording();
	};

	const handleModalClose = async () => {
		setIsModalVisible(false);
		setTimeout(async () => {
			clearRecording();
			await endRecoding();
		}, 200);
	};

	const handleConfirmRecording = async () => {
		await endRecoding();
		clearRecording();
		setIsModalVisible(false);
		await sendMessage(recordingResult);
	};

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
						<TouchableButton onPress={handleModalOpen}>
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
			<RecognitionModal
				isVisible={isModalVisible}
				message={recordingResult}
				onCancel={handleModalClose}
				onConfirm={handleConfirmRecording}
				isRecording={isRecording}
			/>
		</Background>
	);
}
