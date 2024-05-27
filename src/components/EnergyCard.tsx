import React from 'react';

interface EnergyCardProps {
  fuel: string;
  perc: number;
}

const EnergyCard: React.FC<EnergyCardProps> = ({ fuel, perc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 flex flex-col items-center">
      <div className="text-2xl font-bold">{fuel}</div>
      <div className="text-4xl font-extrabold">{perc}%</div>
    </div>
  );
};

export default EnergyCard;
