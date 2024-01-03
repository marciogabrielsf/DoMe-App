import React from "react";
import Modal from "react-native-modal";
import {
	BottomContainer,
	ButtonContainer,
	CancelButton,
	ConfirmButton,
	Content,
	Message,
	MessageContainer,
	Separator,
} from "./styles";

interface RecognitionModalProps {
	message: string;
	isRecording: boolean;
	isVisible: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

export default function RecognitionModal({
	isVisible,
	onCancel,
	onConfirm,
	isRecording,
	message,
}: RecognitionModalProps) {
	const parsedMessage = message.split(" ");

	return (
		<Modal style={{ justifyContent: "flex-end" }} isVisible={isVisible} onBackdropPress={onCancel}>
			<Content>
				<MessageContainer>
					{message ? (
						parsedMessage.map((word, index) => (
							<Message
								from={{
									opacity: 0,
									translateX: 20,
								}}
								animate={{
									opacity: 1,
									translateX: 0,
								}}
								transition={{
									type: "spring",
									stiffness: 200,
									damping: 30,
								}}
								key={index}
							>
								{word}
							</Message>
						))
					) : (
						<Message>Start Speaking...</Message>
					)}
				</MessageContainer>
				<BottomContainer>
					{!isRecording && (
						<ButtonContainer
							from={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
						>
							<CancelButton onPress={onCancel}>
								<Message>Cancel</Message>
							</CancelButton>
							<Separator />
							<ConfirmButton onPress={onConfirm}>
								<Message
									from={{
										opacity: 0,
										translateY: 20,
									}}
									animate={{
										opacity: 1,
										translateY: 0,
									}}
									transition={{
										type: "spring",
										stiffness: 200,
										damping: 20,
									}}
								>
									Confirm
								</Message>
							</ConfirmButton>
						</ButtonContainer>
					)}
				</BottomContainer>
			</Content>
		</Modal>
	);
}
