import { Network, Alchemy, AssetTransfersCategory, AssetTransfersResult } from 'alchemy-sdk';

import { getVar } from '../state';


class AlchemyWeb3 {
  alchemy;
  constructor() {
    const alchemyAPI = getVar('EXPO_PUBLIC_ALCHEMY_API');
    this.alchemy = new Alchemy(alchemyAPI)
  }

  async getTokens(address: string) {
    try {
      const ethBal = await this.alchemy.core.getBalance(address);
      const { tokenBalances } = await this.alchemy.core.getTokenBalances(address);
      return [{ contractAddress: "0x0", tokenBalance: ethBal.toHexString()}, ...tokenBalances]
    } catch(e: any) {
      console.log("error", e)
      return []
    }
  }

  async getTxHistory(address: string) {
    let txs: AssetTransfersResult[] = []
    try {
      const outGoing = (await this.alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        toAddress: address,
        excludeZeroValue: true,
        category: [AssetTransfersCategory.ERC20],
      })).transfers;
      txs = [...txs, ...outGoing]
      
      const incoming = (await this.alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress: address,
        excludeZeroValue: true,
        category: [AssetTransfersCategory.ERC20],
      })).transfers;
      txs = [...txs, ...incoming]

      return txs;
    } catch(e: any) {
      console.log("error", e)
      return [];
    }
  }

  async getTxReceipt(blockNumber: string) {
    try {
      let response = await this.alchemy.core.getTransactionReceipts({ blockNumber });
      return response
    } catch(e) {
      console.log("error", e)
      return null
    }

  }
}

export const alchemyWeb3 = new AlchemyWeb3()