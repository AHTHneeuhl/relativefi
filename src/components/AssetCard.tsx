import { IAssetCard } from "@/config/types";
import Typography from "./Typography";

type AssetCardProps = {
  asset: IAssetCard;
};

const AssetCard: React.FC<AssetCardProps> = ({
  asset: {
    name,
    price,
    icon,
    percentangeChangeOfPrice,
    totalValueLocked,
    popularPairs,
  },
}) => {
  return (
    <div className="relative gradient-background w-72 gradient-border rounded-2xl p-4 pt-12">
      <div className="gradient-background gradient-border w-[6.25rem] h-[6.25rem] rounded-full flex items-center justify-center mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={icon} alt={name} className="h-[50px] w-[50px]" />
      </div>
      <Typography
        variant="p"
        className="text-asset text-center font-medium text-sm my-4"
      >
        {name}
      </Typography>
      <div className="bg-background gradient-border rounded-3xl text-center py-1 my-2">
        <Typography
          variant="p"
          className="text-typography text-base font-semibold"
        >
          {price}
        </Typography>
      </div>
      <Typography
        variant="p"
        className="text-grey text-center text-sm font-medium"
      >
        Price
      </Typography>
      <div className="bg-background gradient-border rounded-3xl text-center py-1 my-2">
        <Typography variant="p" className="text-typography font-semibold">
          {totalValueLocked}
        </Typography>
      </div>
      <Typography
        variant="p"
        className="text-grey text-center text-sm font-medium"
      >
        TVL
      </Typography>
      <div className="flex items-center justify-center my-2">
        <div className="bg-background rounded-3xl py-2 px-3 flex items-center justify-center gap-2">
          {popularPairs.map((pair) => (
            <img key={pair} src={pair} alt={pair} className="w-5 h-5" />
          ))}
        </div>
      </div>
      <Typography
        variant="p"
        className="text-grey text-center text-sm font-medium my-2"
      >
        Popular pairs
      </Typography>
    </div>
  );
};

export default AssetCard;
