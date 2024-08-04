import React from "react";

interface SelectableIconProps {
  icon: any;
  isSelected: boolean;
  onClick: () => void;
}

const SelectableIcon: React.FC<SelectableIconProps> = ({
  icon: Icon,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`w-24 h-24 flex items-center justify-center rounded-xl ${
        isSelected
          ? "bg-primary text-foreground"
          : "bg-background border-2 border-solid shadow-2xl"
      } cursor-pointer`}
      onClick={onClick}
    >
      <Icon size={30} color={isSelected ? "currentColor" : "#60a5fa"} />
    </div>
  );
};

export default SelectableIcon;
