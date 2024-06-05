import { Chain } from "uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks";

export default function getNetworkLogoUrl(network: string, origin: string) {
  switch (network) {
    case Chain.Polygon:
      return origin + "/images/logos/Polygon_Logo.png";
    case Chain.Mode:
      return origin + "/images/logos/mode.svg";
    case Chain.Arbitrum:
      return origin + "/images/logos/Arbitrum_Logo.png";
    case Chain.Optimism:
      return origin + "/images/logos/Optimism_Logo.png";
    default:
      return "";
  }
}
