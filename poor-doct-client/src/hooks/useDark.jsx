import { useEffect, useState } from "react";

const useDark = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  return { isDark, setIsDark };
};

export default useDark;
