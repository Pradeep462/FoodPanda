import { useEffect, useState } from "react";

const useUserOnline = () => {
  const [onlineStates, setOnlineStates] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStates(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStates(false);
    });
  }, []);
  return onlineStates;
};

export default useUserOnline;
