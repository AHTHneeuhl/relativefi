import Typography from "./Typography";
import activityIcon from "../assets/activity.svg";

const Header: React.FC = () => {
  return (
    <div className="flex gap-4 mt-32 mb-8">
      <img src={activityIcon} alt="activity" />
      <Typography variant="h1" className="text-typography font-bold">
        Trending Assets
      </Typography>
    </div>
  );
};

export default Header;
