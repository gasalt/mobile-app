import { Text, View } from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & Text['props'];
export type ViewProps = ThemeProps & View['props'];

export function DefaultText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  return <Text style={[{ color: "white" }, style]} {...otherProps} />;
}

export function DefaultView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  return <View style={[{ backgroundColor: "transparent" }, style]} {...otherProps} />;
}
