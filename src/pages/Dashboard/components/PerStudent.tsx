import React, { useEffect, useState } from "react";
import { getPerStudent } from "../../../service/dashboard";
import { IPerStudent } from "../../../interfaces/Dashboard";
import Loader from "../../../components/Loader";

type PerStudentProps = {
  id: number;
};

const PerStudent = (props: PerStudentProps) => {
  const { id } = props;

  const [perStudent, setPerStudent] = useState<IPerStudent>();
  const [loadingPerStudent, setLoadingPerStudent] = useState<boolean>(true);
  const [errorPerStudent, setErrorPerStudent] = useState<string>("");

  useEffect(() => {
    async function init() {
      await getPerStudent(id, perStudentSuccessCallback, perStudentErrorCallback);
    }
    init();
  }, [id]);

  const perStudentSuccessCallback = (response: IPerStudent) => {
    setPerStudent(response);
    setLoadingPerStudent(false);
  };

  const perStudentErrorCallback = (error: string) => {
    setErrorPerStudent(error);
    setLoadingPerStudent(false);
  };

  if (loadingPerStudent)  return <Loader size={80}/>;
  if (errorPerStudent) return <h1>{errorPerStudent}</h1>;

  return (
    <>
    </>
  );
};

export default PerStudent;

