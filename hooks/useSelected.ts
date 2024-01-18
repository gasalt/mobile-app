import { useGlobalState } from "@/sdk/state"

const useSelected = () => {
    const {currencyData, selectedCurrency: sc, selectedFeeCurrency: sfc} = useGlobalState()

    const selectedCurrency = currencyData.find((currency) => currency.address === sc) || currencyData[0]
    const selectedFeeCurrency = currencyData.find((currency) => currency.address === sfc) || currencyData[0]

    return {selectedCurrency, selectedFeeCurrency}
}

export default useSelected
