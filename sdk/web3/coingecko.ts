import axios from 'axios'
import { coinGeckoTokenIDs } from './token-cg-ids'


export const getTokenLogoAndPrice = async (tokenId: string) => {
  try {
    const prices = await axios.get(`https://api.coingecko.com/api/v3/coins/${tokenId}`)
    const { image, market_data } =  prices.data;
    return { logo: image.large, price: market_data.current_price.usd }
  } catch(e: any) {
    console.log('getTokenLogoAndPrice error', e.response.data)
    return { logo: null, price: '0'}
  }
}

export const getTokensLogosAndPrices = async (tokenIds: string[]) => {
  let result = []
  for(let tokenId of tokenIds) {
    try {
      const logoAndPrice = await getTokenLogoAndPrice(tokenId)
      result.push(logoAndPrice);
      
    } catch(e: any) {
      console.log(`error fetching ${tokenId} logo`, e)
    }
  }
  return result;
}

export const getTokenPrice = async (tokens: string[]) => {
  try {
    const prices = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${tokens.join('%')}&vs_currencies=usd&precision=4`)
    return prices.data;
  } catch(e: any) {
    console.log("get price err:",e)
    return {}
  }
}

export const findTokenId = (tokenSymbol: string) => {
  const result = coinGeckoTokenIDs.find(id => id.symbol.toLowerCase() === tokenSymbol.toLowerCase())
  return result?.id
}
