import { useRef, ReactNode, useState } from "react";
import {
  Animated,
  Easing,
  TextInput,
  StyleSheet,
  InputModeOptions,
  TextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";

import { DefaultView } from '@/components/Defaults';


const titleActiveSize = 14,
  titleInActiveSize = 14,
  titleActiveColor = "#8987AB",
  titleInactiveColor = "#403E59";

interface FloatingTextInputProps extends TextInputProps {
  label: string;
  mode?: InputModeOptions;
  rightElement?: ReactNode;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
}

const FloatingTextInput = ({
  label = "",
  mode = "text",
  rightElement,
  value,
  onChangeText,
  placeholder = "",
  inputStyle = {}

}: FloatingTextInputProps) => {
  const animatedValue = useRef(new Animated.Value(0));
  const [active, setActive] = useState(false);

  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [22, 4],
          extrapolate: "clamp",
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: "clamp",
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
  };

  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();

    setActive(true);
  };

  const onBlur = () => {
    if (!value) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    setActive(false);
  };

  return (
    <Animated.View style={styles.subContainer}>
      <Animated.Text style={[styles.label, returnAnimatedTitleStyles]}>
        {label}
      </Animated.Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[styles.textStyle, inputStyle, active && {borderColor: "#627EEA"}]}
        onBlur={onBlur}
        onFocus={onFocus}
        inputMode={mode}
        returnKeyType="done"
        placeholder={placeholder}
        placeholderTextColor={"#403E59"}
      />
      <DefaultView style={styles.right}>{rightElement}</DefaultView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    position: "relative",
  },
  label: {
    marginHorizontal: 18,
    top: 14,
  },
  textStyle: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
    borderColor: "#494766",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 56,
  },
  right: { position: "absolute", right: 14, top: 35 },
});

export default FloatingTextInput;
