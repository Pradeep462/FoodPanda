import { useRouteError } from "react-router-dom";

const Error = () => {
  let error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Ooop's!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
