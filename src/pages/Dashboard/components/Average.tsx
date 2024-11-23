import { useEffect, useState } from "react";
import theme from "../../../assets/theme";
import { IAverage } from "../../../interfaces/Dashboard";
import { getAverage } from "../../../service/dashboard";
import { PieChart } from "@mui/x-charts";

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
      label: `Nota média:\n${average?.average.toFixed(0).replace(".", ",") || 0}`,
      value: average?.average || 0,
      color: theme.lightBlue
    },
    {
      value: 10 - (average?.average || 0),
      color: theme.grey
    },
  ];

  if (loadingAverage) return <p>Carregando...</p>;
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