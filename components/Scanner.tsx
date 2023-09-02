import React, { useState, useEffect } from "react";
import { StyleSheet, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { DefaultText, DefaultView } from "./Defaults";

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
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Pressable
          style={{
            marginTop: 300,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setScanned(false)}
        >
          <DefaultText>Tap to scan again</DefaultText>
        </Pressable>
      )}
    </DefaultView>
  );
}
