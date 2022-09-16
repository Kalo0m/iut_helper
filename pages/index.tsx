import { useEffect, useState } from "react";

// create hello world react component
export default function Index() {
  const [opacity, setOpacity] = useState(50);
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(lastvalue => lastvalue === 100 ? 50 : 100);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);


  return <>
    <h1 className={`text-green-500 transition-all duration-1000 text-center pt-10 text-3xl opacity-${opacity}`}>Coming soon ...</h1>
  </>
}

