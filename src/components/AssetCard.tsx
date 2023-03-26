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
  const positive = percentangeChangeOfPrice.charAt(0) === "+";

  return (
    <div className="relative mb-24">
      <div className="gradient-background gradient-border w-[6.25rem] h-[6.25rem] rounded-full flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={icon} alt={name} className="h-[50px] w-[50px]" />
      </div>
      <div className="asset-card gradient-background w-[291px] h-[350px] gradient-border rounded-2xl p-4 pt-12">
        <Typography
          variant="p"
          className="text-asset text-center font-medium text-sm mt-6 mb-4"
        >
          {name}
        </Typography>
        <div className="bg-background gradient-border relative rounded-3xl text-center py-1 my-2">
          <Typography
            variant="p"
            className="text-typography text-base font-semibold"
          >
            {price}
            <Typography
              variant="span"
              className={`text-sm absolute right-3 bottom-[5px] ${
                positive ? "text-profit" : "text-loss"
              }`}
            >
              {percentangeChangeOfPrice}
            </Typography>
          </Typography>
        </div>
        <Typography
          variant="p"
          className="text-grey text-center text-sm font-medium mb-4"
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
          className="text-grey text-center text-sm font-medium mb-4"
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
    </div>
  );
};

export default AssetCard;
