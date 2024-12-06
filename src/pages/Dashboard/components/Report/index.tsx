import { useEffect, useState } from "react";
import { getReport } from "../../../../service/dashboard";
import { IReport } from "../../../../interfaces/Dashboard";
import Loader from "../../../../components/Loader";
import { Text } from "./styles";

type AverageProps = {
  id: number;
};

const Report = (props: AverageProps) => {
  const { id } = props;

  const [report, setReport] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [displayedText, setDisplayedText] = useState<string>("");

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
  }, [id]);

  useEffect(() => {
    if (!loading && report) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + report[index]);
        index++;
        if (index === report.length -1) {
          clearInterval(interval); 
        }
      }, 10);
      return () => clearInterval(interval); 
    }
  }, [report, loading]);

  if (loading) return <Loader size={80} />;
  if (error) return <Text>{error}</Text>;

  return <Text>{displayedText}</Text>;
};

export default Report;
