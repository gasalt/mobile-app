import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { DefaultText, DefaultView } from "./Defaults";
import CustomButton from "./CustomButton";

export default function Scanner({ onClose }: ModalProps) {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: unknown;
  }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    onClose && onClose();
  };

  if (hasPermission === null) {
    return <DefaultText>Requesting for camera permission</DefaultText>;
  }
  if (hasPermission === false) {
    return <DefaultText>No access to camera</DefaultText>;
  }

  return (
    <DefaultView style={{ flex: 1 }}>
      <DefaultView
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 48,
        }}
      >
        <DefaultText
          style={{ fontWeight: "600", fontSize: 24, lineHeight: 24 }}
        >
          Scan QR Code
        </DefaultText>
      </DefaultView>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 500,
          marginHorizontal: 20,
        }}
      />
      <DefaultView
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30,
        }}
      >
        {scanned ? (
          <CustomButton
            label="Tap to scan again"
            onPress={() => setScanned(false)}
            variant="primary"
            btnStyle={{ width: "50%" }}
          />
        ) : (
          <CustomButton
            label="Close"
            onPress={onClose}
            variant="cancel"
            btnStyle={{ width: "50%" }}
          />
        )}
      </DefaultView>
    </DefaultView>
  );
}
