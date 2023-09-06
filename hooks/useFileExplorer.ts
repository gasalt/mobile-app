import * as DocumentPicker from "expo-document-picker";
import { Dispatch, SetStateAction } from "react";
import {  readRemoteFile, readString } from 'react-native-csv';
export const useOpenFileExplorer = async (setAddress:  Dispatch<SetStateAction<string>>) => {
  try {
    let result = await DocumentPicker.getDocumentAsync({
      type: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/csv"]
    });

    setAddress(result?.assets?.[0]?.uri ?? "")
  } catch (error) {
    console.log(error);
  }
};

export const useReadLocalData = (url: string) => {
    try {
        readString(url, {
            header: true,
            complete: (results: any) => {
              console.log(results.data);
            },
          });
    } catch (error) {
        console.log(error, 1);
    }
};

export const useReadRemoteData = (url: string) => {
    try {
        readRemoteFile(url, {
            download: true,
            header: true,
            delimeter: " ",
           
            complete: (results: any) => {
              console.log(results.data);
            },
          });
    } catch (error) {
        console.log(error, 1);
    }
};
