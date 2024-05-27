import React from 'react';
import EnergyCard from './EnergyCard';

interface Energy {
  fuel: string;
  perc: number;
}

interface EnergySectionProps {
  data: Energy[];
}

const EnergySection: React.FC<EnergySectionProps> = ({ data }) => {
  const getMostUsedEnergies = (): Energy[] => {
    return data.slice().sort((a, b) => b.perc - a.perc).slice(0, 3);
  };

  const getLeastUsedEnergies = (): Energy[] => {
    return data.slice().sort((a, b) => a.perc - b.perc).slice(0, 3);
  };


  const renderMostUsedEnergies = () => {
    return (
      <div className="flex-1 p-2 w-80">
        <h2 className="text-base sm:text-lg font-semibold mx-2 mb-4 text-left">Most Used</h2>
        <div className="w h-full">
          {getMostUsedEnergies().map((energy, index) => (
            <EnergyCard key={index} fuel={energy.fuel} perc={energy.perc} />
          ))}
        </div>
      </div>
    );
  };

  const renderLeastUsedEnergies = () => {
    return (
      <div className="flex-1 p-2 w-80 ">
        <h2 className="text-base sm:text-lg mx-2 font-semibold mb-4 text-left">Less Used</h2>
        <div className="w h-full">
          {getLeastUsedEnergies().map((energy, index) => (
            <EnergyCard key={index} fuel={energy.fuel} perc={energy.perc} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-row justify-center h-full gap-5">
      {renderMostUsedEnergies()}
      {renderLeastUsedEnergies()}
    </div>
  );
};

export default EnergySection;
