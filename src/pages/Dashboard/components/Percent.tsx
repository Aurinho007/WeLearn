import { useEffect, useState } from "react";
import { IDashboardPercent } from "../../../interfaces/Dashboard";
import theme from "../../../assets/theme";
import { getPercent } from "../../../service/dashboard";
import { BarChart } from '@mui/x-charts/BarChart';
import Loader from "../../../components/Loader";

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
      color: theme.lightBlue,
      id: 1
    },
    {
      name: "Erros",
      value: percent?.percents.wrong || 0,
      color: theme.toast.error,
      id: 2
    },
    {
      name: "Abstenções",
      value: percent?.percents.dontKnow || 0,
      color: theme.grey,
      id: 3
    }
  ];

  if (loadingPercent)  return <Loader size={80}/>;
  if (errorPercent) return <h1>{errorPercent}</h1>;

  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: data.map((item) => item.name),
        },
      ]}
      yAxis={[
        {
          scaleType: 'linear',
          valueFormatter: (value) => `${value}%`,
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
