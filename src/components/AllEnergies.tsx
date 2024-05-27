import React from 'react';
import EnergyCard from './EnergyCard';

interface Energy {
  fuel: string;
  perc: number;
}

interface AllEnergiesProps {
  data: Energy[];
}

const AllEnergies: React.FC<AllEnergiesProps> = ({ data }) => {
  const renderAllEnergies = () => {
    return (
      <div className=" flex flex-col p-2">
        <h2 className="text-base sm:text-lg mx-2 font-semibold mb-4 text-left">All Energies</h2>
        <div className="flex flex-row h-full flex-wrap w-100">
          {data.map((energy, index) => (
            <EnergyCard key={index} fuel={energy.fuel} perc={energy.perc} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>{renderAllEnergies()}</div>
  );
};

export default AllEnergies;
