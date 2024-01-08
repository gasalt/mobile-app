import BigAvalanche from "@/assets/svgs/BigAvalanche";
import BigEth from "@/assets/svgs/BigEth";
import BigPolygon from "@/assets/svgs/BigPolygon";


export const cryptoData = [
  {
    id: 5,
    name: "Goerli",
    logo: (size=24) => <BigEth width={size} height={size} />,
    active: true,
  },
  {
    id: 137,
    name: "Polygon",
    logo: (size=24) => <BigPolygon width={size} height={size} />,
    active: true,
  },
  {
    id: 1,
    name: "Ethereum",
    logo: (size=24) => <BigEth width={size} height={size} />,
  },
  {
    id: 43114,
    name: "Avalanche",
    logo: (size=24) => <BigAvalanche width={size} height={size} />,
  },
  // {
  //   id: 3,
  //   name: "Arbitrum",
  //   logo: <BigArbitrum />,
  // },
  // {
  //   id: 4,
  //   name: "Optimism",
  //   logo: <BigOptimism />,
  // },
  // {
  //   id: 5,
  //   name: "Solana",
  //   logo: <BigSolana />,
  // },
  // {
  //   id: 7,
  //   name: "Celo",
  //   logo: <BigCelo />,
  // },
];
