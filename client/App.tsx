import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [health, setHealth] = useState<string>('');

  useEffect(() => {
    const healthCheck = async () => {
      const res = await fetch('/health');
      const data = await res.json();
      setHealth(data.message);
    };
    healthCheck();
  }, []);

  return (
    <>
      <div>{health}</div>
    </>
  );
}

export default App;
