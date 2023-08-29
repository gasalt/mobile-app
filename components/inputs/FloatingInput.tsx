import {  useRef, ReactNode } from "react";
import {
  Animated,
  Easing,
  TextInput,
  StyleSheet,
  InputModeOptions,
} from "react-native";
import {  DefaultView } from "../Defaults";

const titleActiveSize = 14,
  titleInActiveSize = 14,
  titleActiveColor = "#8987AB",
  titleInactiveColor = "#403E59";

interface FloatingTextInputProps {
  label: string;
  mode?: InputModeOptions;
  rightElement?: ReactNode;
  value: string;
  onChangeText: (value: string) => void;
}

const FloatingTextInput = ({
  label = "",
  mode = "text",
  rightElement,
  value,
  onChangeText
}: FloatingTextInputProps) => {
  const animatedValue = useRef(new Animated.Value(0));

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
  };

  return (
    <Animated.View style={styles.subContainer}>
      <Animated.Text style={[styles.label, returnAnimatedTitleStyles]}>
        {label}
      </Animated.Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.textStyle}
        onBlur={onBlur}
        onFocus={onFocus}
        inputMode={mode}
        returnKeyType="done"
      />
      <DefaultView style={styles.right}>
        {rightElement}
      </DefaultView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    marginHorizontal: 8,
    position: "relative"
  },
  label: {
    marginHorizontal: 12,
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
  right: { position: "absolute", right: 10, top: 35 }
});

export default FloatingTextInput;
