import bitcoinIcon from "../assets/bitcoin.svg";
import solanaIcon from "../assets/solana.svg";
import ethereumIcon from "../assets/ethereum.svg";
import binanceIcon from "../assets/binance.svg";
import shibaIcon from "../assets/shiba.svg";

export const trendingAssets = [
  {
    icon: bitcoinIcon,
    name: "Bitcoin (BTC)",
    price: "$31,812.80",
    percentangeChangeOfPrice: "+10%",
    totalValueLocked: "$60,000",
    popularPairs: [solanaIcon, ethereumIcon, binanceIcon],
  },
  {
    icon: solanaIcon,
    name: "Solana (SOL)",
    price: "$32.83",
    percentangeChangeOfPrice: "-12.32%",
    totalValueLocked: "$60,000",
    popularPairs: [bitcoinIcon, ethereumIcon, binanceIcon],
  },
  {
    icon: ethereumIcon,
    name: "Ethereum (ETH)",
    price: "$1,466.45",
    percentangeChangeOfPrice: "-11.93%",
    totalValueLocked: "$60,000",
    popularPairs: [solanaIcon, bitcoinIcon, binanceIcon],
  },
  {
    icon: binanceIcon,
    name: "Binance USD (BUSD)",
    price: "$1.00",
    percentangeChangeOfPrice: "+0.26%",
    totalValueLocked: "$60,000",
    popularPairs: [solanaIcon, ethereumIcon, bitcoinIcon],
  },
  {
    icon: shibaIcon,
    name: "Shiba Inu (SHIB)",
    price: "$0.00000001948",
    percentangeChangeOfPrice: "-8.1%",
    totalValueLocked: "$60,000",
    popularPairs: [solanaIcon, ethereumIcon, binanceIcon],
  },
];
