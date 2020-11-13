import { useEffect } from "preact/hooks";
import * as fetch from "d3-fetch";

function FetchData(_props) {
  const onLoad = () => {
    return fetch
      .csv("/covid-global-deaths.csv")
      .then(console.log)
      .catch((err) => console.log(err));
  };

  useEffect(onLoad, []);

  return <div></div>;
}

export default FetchData;
