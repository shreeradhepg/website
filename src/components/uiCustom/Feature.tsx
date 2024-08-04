import {
  Wifi,
  ParkingCircleIcon,
  Dumbbell,
  Library,
  Dessert,
} from "lucide-react";

interface FeatureProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const Feature: React.FC<FeatureProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="h-[5.75rem] mr-[40px]">
    <div className="flex items-center justify-center gap-5 h-full">
      <Icon />
      <div className="flex flex-col">
        <div className="text-primary  text-[1.0625rem] font-black capitalize">
          {title}
        </div>
        <div className="text-secondary  text-[.9375rem]">{description}</div>
      </div>
    </div>
  </div>
);
