import * as WebBrowser from "expo-web-browser";
import * as SecureStore from "expo-secure-store";
import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK, SdkLoginParams } from "@web3auth/react-native-sdk";
import { useEffect, useState } from "react";
import Constants, { AppOwnership } from 'expo-constants';
import * as Linking from 'expo-linking';
import { useGlobalState } from "../state";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function useAuth() {

    const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null)
    const [resolvedRedirectUrl, setResolvedRedirectUrl] = useState("")
    const {setKeyValue} = useGlobalState()

    useEffect(() => {
        const _resolvedRedirectUrl =
            Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
                ? Linking.createURL("(drawer)/(tabs)/wallet", {})
                : Linking.createURL("(public)/transactionPin", { scheme: "gasalt" });

        const clientId = process.env.EXPO_PUBLIC_WEB3AUTH_CLIENTID!;

        const _web3auth = new Web3Auth(WebBrowser, SecureStore, {
            clientId,
            network: OPENLOGIN_NETWORK.TESTNET, // or other networks
        });
        setWeb3auth(_web3auth)
        setResolvedRedirectUrl(_resolvedRedirectUrl)
    }, [])

    const login = async ({ email, authType }: { email?: string, authType: "gmail" | "apple" | "email" }) => {
        const authMap = {
            gmail: LOGIN_PROVIDER.GOOGLE,
            apple: LOGIN_PROVIDER.APPLE,
            email: LOGIN_PROVIDER.EMAIL_PASSWORDLESS,
        }
        const loginParams: SdkLoginParams = {
            loginProvider: authMap[authType],
            redirectUrl: resolvedRedirectUrl,
            extraLoginOptions: undefined
        }
        if (authType === "email") {
            loginParams.extraLoginOptions = { login_hint: email }
        }
        await web3auth?.init()
        await web3auth?.login(loginParams);
        const privateKey = web3auth?.privKey
        if(!email){
            const auth = web3auth?.userInfo()
            email = auth?.email
        }
        await AsyncStorage.setItem("completedOnboarding", "true")
        await AsyncStorage.setItem("isLoggedIn", "true")
        setKeyValue("session", {completedOnboarding: true, isLoggedIn: true})
        privateKey && setKeyValue("privateKey", privateKey)
        email && setKeyValue("email", email)
        const gasaltAuthParam = {privateKey, email}
        await SecureStore.setItemAsync("gasaltAuthParam", JSON.stringify(gasaltAuthParam));
    }

    return { login }
}
