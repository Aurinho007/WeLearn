import { useEffect, useState } from "react";
import { getReport } from "../../../../service/dashboard";
import { IReport } from "../../../../interfaces/Dashboard";
import Loader from "../../../../components/Loader";
import { Text } from "./styles";

type AverageProps = {
  id: number
}

const Report = (props: AverageProps) => {
  const { id } = props;

  const [report, setReport] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const sucessCallback = (response: IReport) => {
    setReport(response.report);
    setLoading(false);
  };

  const errorCallback = (error: string) => {
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    async function init() {
      await getReport(id, sucessCallback, errorCallback);
    }

    init();
  });

  if (loading) return <Loader size={80} />;
  if (error) return <Text>Ops... Algo deu errado: {error}</Text>;

  return (
    <Text>
      {report}
    </Text>);
};

export default Report;