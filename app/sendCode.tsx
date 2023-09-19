import CustomButton from "@/components/CustomButton";
import { DefaultText, DefaultView } from "@/components/Defaults";
import TabScreen from "@/components/TabScreen";
import React from "react";
import { useWindowDimensions } from "react-native";
import SendEnvelope from "@/assets/svgs/SendEnvelope";
import { useRouter } from "expo-router";

const SendCode = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  return (
    <TabScreen>
      <DefaultView style={{ alignItems: "center", justifyContent: "center" }}>
        <SendEnvelope />
        <DefaultText style={{ fontWeight: "500", fontSize: 24 }}>
          Code on its way
        </DefaultText>
        <DefaultText
          style={{
            color: "#8987AB",
            fontSize: 16,
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          {`Login code has been sent \nyour mail`}
        </DefaultText>
      </DefaultView>
      <DefaultView style={{ width, paddingHorizontal: 20, marginVertical: 20 }}>
        <CustomButton
          label="Login"
          onPress={() => router.replace("/loginCode")}
          variant="primary"
        />
      </DefaultView>
    </TabScreen>
  );
};

export default SendCode;
