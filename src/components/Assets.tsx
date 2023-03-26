import { trendingAssets } from "@/config";
import AssetCard from "./AssetCard";

const Assets: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      {trendingAssets.map((asset) => (
        <AssetCard key={asset.name} asset={asset} />
      ))}
    </div>
  );
};

export default Assets;
