import * as DocumentPicker from "expo-document-picker";
import { Dispatch, SetStateAction } from "react";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";

const type = [
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
];
export const useOpenFileExplorer = async (
  setAddress: Dispatch<SetStateAction<string>>
) => {
  try {
    let result = await DocumentPicker.getDocumentAsync({
      type,
    });

    setAddress(result?.assets?.[0]?.uri ?? "");
  } catch (error) {
    console.log(error);
  }
};

export const useReadLocalData = async (
  url: string,
  setData: Dispatch<SetStateAction<Array<{ address: string; amount: string }>>>,
  setAddress: Dispatch<SetStateAction<string>>
) => {
  try {
    const result = await FileSystem.readAsStringAsync(url, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const res = await XLSX.read(result, { type: "base64" });
    const shName = res.SheetNames[0];
    const sheet = res.Sheets[shName];
    const data = XLSX.utils.sheet_to_json(sheet) as Array<{
      address: string;
      amount: string;
    }>;
    setData(data);
    setAddress("")
  } catch (error) {
    console.log(error);
  }
};

// WIP: Might need google api
export const useReadRemoteData = (url: string) => {
  try {
  } catch (error) {
    console.log(error, 1);
  }
};
