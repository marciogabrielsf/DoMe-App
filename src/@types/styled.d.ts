import theme from "@/themes/theme";
import colors from "../themes/colors";
import fonts from "../themes/fonts";

type ITheme = typeof theme;

declare module "styled-components/native" {
	export interface DefaultTheme extends ITheme {}
}
