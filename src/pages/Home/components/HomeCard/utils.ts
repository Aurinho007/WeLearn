import graph from "../../../../assets/images/data-management.svg";
import hand from "../../../../assets/images/raise-hand.svg";
import light from "../../../../assets/images/idea.svg";

const getIcon = (icon: string): string => {
  return icon === "graph" ? graph : icon === "hand" ? hand : light;
};

export default getIcon;