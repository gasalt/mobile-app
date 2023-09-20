import { DefaultView } from "@/components/Defaults";
import { useRef } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputKeyPressEventData,
} from "react-native";
import { TextInput } from "react-native";

interface OTPInputProps {
  length?: number;
  value: Array<string>;
  disabled: boolean;
  onChange: (value: Array<string>) => void;
}

const OTPInput = ({
  length = 4,
  disabled = false,
  value,
  onChange,
}: OTPInputProps) => {
  const inputRefs = useRef<Array<Nullable<TextInput>>>([]);

  const handleBackSpace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const { nativeEvent } = event;

    if (nativeEvent.key === "Backspace") {
      handleChange("", index);
    }
  };

  const onChangeValue = (text: string, index: number) => {
    const newValue = value?.map((item, i) => {
      if (i === index) {
        return text;
      }
      return item;
    });

    onChange(newValue);
  };

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index);
    if (text.length !== 0) return inputRefs?.current[index + 1]?.focus();
    return inputRefs?.current[index - 1]?.focus();
  };
  return (
    <DefaultView style={styles.container}>
      {[...new Array(length)].map((_, index) => (
        <TextInput
          ref={(ref) => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          style={styles.input}
          key={index}
          maxLength={1}
          contextMenuHidden
          selectTextOnFocus
          editable={!disabled}
          keyboardType="decimal-pad"
          testID={`OTPInput-${index}`}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(event) => handleBackSpace(event, index)}
        />
      ))}
    </DefaultView>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    width: 60,
    height: 60,
    color: "white",
    fontWeight: "400",
    borderColor: "#494766",
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
  },
});
