import { useEffect, useState } from "react";
import { IDashboardPercent } from "../../../interfaces/Dashboard";
import theme from "../../../assets/theme";
import { getPercent } from "../../../service/dashboard";
import { BarChart } from '@mui/x-charts/BarChart';

type PercentProps = {
  id: number
}

const Percent = (props: PercentProps) => {
  const { id } = props;

  const [percent, setPercent] = useState<IDashboardPercent>();
  const [loadingPercent, setLoadingPercent] = useState<boolean>(true);
  const [errorPercent, setErrorPercent] = useState<string>("");

  useEffect(() => {
    async function init() {
      await getPercent(id, percentSucessCallback, percentErrorCallback);
    }

    init();
  }, []);

  const percentSucessCallback = (response: IDashboardPercent) => {
    setPercent(response);
    setLoadingPercent(false);
  };

  const percentErrorCallback = (error: string) => {
    setErrorPercent(error);
    setLoadingPercent(false);
  };

  const data = [
    {
      name: `Acertos`,
      value: percent?.percents.correct || 0,
      color: theme.lightBlue
    },
    {
      name: "Erros",
      value: percent?.percents.wrong || 0,
      color: theme.toast.error
    },
    {
      name: "Abstenções",
      value: percent?.percents.dontKnow || 0,
      color: theme.grey
    }
  ]

  if (loadingPercent) return <p>Carregando...</p>;
  if (errorPercent) return <h1>{errorPercent}</h1>;

  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: data.map((item) => item.name),
        },
      ]}
      series={[
        {
          data: data.map((item) => item.value),
          color: theme.lightBlue,
        },
      ]}
      width={350}
      height={150}
    />
  );


};

export default Percent;