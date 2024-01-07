import { ISignUpData } from "@/interfaces/Forms";
import { ParamListBase } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			addPage: undefined;
			clearAllConversations: undefined;
			loginStep1: undefined;
			loginStep2: { login: string };
			signUpStep1: undefined;
			signUpStep2: { data: ISignUpData } | undefined;
			signUpStep3: { data: ISignUpData } | undefined;
			signUpStep4: { data: ISignUpData } | undefined;
			signUpStep5: { data: ISignUpData } | undefined;
		}
	}
}
