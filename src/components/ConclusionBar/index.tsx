import ConclusionBarProps from "./interface";
import { Bar, FillBar, PercentNumber } from "./styles";

const ConclusionBar = (props: ConclusionBarProps) => {
  const { conclusionPercent, height } = props;

  return (
    <Bar height={height}>
      <FillBar conclusionPercent={conclusionPercent} />
      <PercentNumber>{conclusionPercent}%</PercentNumber>
    </Bar>

  );
};

export default ConclusionBar;