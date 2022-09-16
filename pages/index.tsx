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
    <h1 className={`text-green-500 transition-all opacity-50 duration-1000 text-center pt-10 text-3xl opacity-${opacity}`}>Coming soon ...</h1>
  </>
}

export async function getServerSideProps() {
  console.log('coucou from server')

  // Pass data to the page via props
  return { props: { data: 'test' } }
}
