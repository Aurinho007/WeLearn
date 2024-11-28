import { useEffect, useState } from "react";
import theme from "../../../assets/theme";
import { IAverage } from "../../../interfaces/Dashboard";
import { getAverage } from "../../../service/dashboard";
import { PieChart } from "@mui/x-charts";
import Loader from "../../../components/Loader";

type AverageProps = {
  id: number
}

const Average = (props: AverageProps) => {
  const { id } = props;

  const [average, setAverage] = useState<IAverage>();
  const [loadingAverage, setLoadingAverage] = useState<boolean>(true);
  const [errorAverage, setErrorAverage] = useState<string>("");

  useEffect(() => {
    async function init() {
      await getAverage(id, averageSucessCallback, averageErrorCallback);
    }

    init();
  }, []);

  const averageSucessCallback = (response: IAverage) => {
    setAverage(response);
    setLoadingAverage(false);
  };

  const averageErrorCallback = (error: string) => {
    setErrorAverage(error);
    setLoadingAverage(false);
  };

  const data = [
    {
      label: ` ${average?.average.toFixed(1).replace(".", ",") || 0} de 10`,
      value: average?.average || 0,
      color: theme.lightBlue
    },
    {
      label: `restante\npara nota 10`,
      value: 10 - (average?.average || 0),
      color: theme.grey
    },
  ];

  if (loadingAverage) return <Loader size={80}/>;
  if (errorAverage) return <h1>{errorAverage}</h1>;

  return (
    <PieChart
      series={[{
        data: data,
        innerRadius: 40,
        cornerRadius: 5
      }]}
      width={350}
      height={150}
    />
  );

};

export default Average;