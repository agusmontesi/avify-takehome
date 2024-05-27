import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EnergySection from './components/EnergySection';
import EnergyChart from './components/EnergyChart';
import AllEnergies from './components/AllEnergies';

const App = () => {
  const [data, setData] = useState<Array<{ fuel: string, perc: number }>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.carbonintensity.org.uk/generation');
        setData(result.data.data.generationmix);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <div className="container mx-auto py-4 px-20">
        <h1 className="text-4xl font-bold text-center mb-8">UK energy consumption report</h1>
        <div className="flex flex-row gap-10">
          <div className="flex-grow">
            <EnergySection data={data} />
          </div>
          {data.length > 0 && (
            <div className="flex-grow">
              <EnergyChart data={data} />
            </div>
          )}
        </div>
        <div>
          <AllEnergies data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
