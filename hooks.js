
import { useState,useEffect } from "react";
const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("joke-json", json);
        setResult(json);
      });
  }, []);
  return result
};

export default useFetch