import { motion } from "framer-motion";

interface FeatureProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  index: Number;
  title: string;
  description: string;
  titleSize?: string;
  descriptionSize?: string;
  iconSize?: string;
  marginLeft?: string;
}

export const FeatureDt: React.FC<FeatureProps> = ({
  icon: Icon,
  title,
  description,
  titleSize = "text-[1.0625rem]",
  descriptionSize = "text-[.9375rem]",
  iconSize = "w-6 h-6",
  marginLeft, // Default margin-left
  index,
}) => (
  <motion.div
    className={`relative h-[5.75rem] `}
    style={{ marginLeft: `80px` }}
    whileHover={{ scale: 1.1 }}
  >
    <div className="flex items-center justify-center gap-5 h-full  p-2">
      <Icon className={iconSize} />
      <div className="flex flex-col">
        <div className={`text-primary font-black capitalize ${titleSize}`}>
          {title}
        </div>
        <div className={`text-secondary ${descriptionSize}`}>{description}</div>
      </div>
    </div>
  </motion.div>
);
