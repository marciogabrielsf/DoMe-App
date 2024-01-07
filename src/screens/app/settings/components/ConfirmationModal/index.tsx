import React, { useCallback } from "react";
import {
	BottomSheetModal,
	BottomSheetBackdrop,
	BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import {
	ButtonContainer,
	ButtonText,
	Container,
	Message,
	SecondaryButtonContainer,
	SecondaryButtonText,
} from "./styles";
import { useAuth } from "@/hooks/useAuth";
import { ActivityIndicator } from "react-native";

interface ConfirmationModalProps {
	bottomSheetRef: React.RefObject<BottomSheetModal>;
}

export default function ConfirmationModal({ bottomSheetRef }: ConfirmationModalProps) {
	const renderBackdrop = useCallback(
		(props_: BottomSheetBackdropProps) => (
			<BottomSheetBackdrop {...props_} pressBehavior="close" opacity={0.8} disappearsOnIndex={-1} />
		),
		[]
	);

	const auth = useAuth();

	const handleSignOut = () => auth.signOut();
	const handleCancel = () => bottomSheetRef.current?.close();

	return (
		<BottomSheetModal backdropComponent={renderBackdrop} snapPoints={["30%"]} ref={bottomSheetRef}>
			<Container>
				<Message>Are you sure you want to Sign out?</Message>
				<ButtonContainer onPress={handleSignOut}>
					{auth.loading ? <ActivityIndicator color="#fff" /> : <ButtonText>Sign Out</ButtonText>}
				</ButtonContainer>
				<SecondaryButtonContainer onPress={handleCancel}>
					<SecondaryButtonText>Cancel</SecondaryButtonText>
				</SecondaryButtonContainer>
			</Container>
		</BottomSheetModal>
	);
}
