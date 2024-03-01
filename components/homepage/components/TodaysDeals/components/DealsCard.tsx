"use client"
import React from "react";

const cards = [
    { id: 1, title: 'Card 1', width: 'w-[500px]', height: 'h-full' },
    { id: 2, title: 'Card 2', width: 'w-[500px]', height: 'h-240px' },
    { id: 3, title: 'Card 3', width: 'w-[500px]', height: 'h-240px' },
    { id: 4, title: 'Card 4', width: 'w-[500px]', height: 'h-240' },
    { id: 5, title: 'Card 5', width: 'w-[500px]', height: 'h-240' },
    { id: 6, title: 'Card 6', width: 'w-[500px]', height: 'h-240' },
    { id: 7, title: 'Card 7', width: 'w-[500px]', height: 'h-240' },
    { id: 8, title: 'Card 8', width: 'w-[500px]', height: 'h-240' },
    { id: 9, title: 'Card 9', width: 'w-[500px]', height: 'h-240' },
  ];
  
  const Card: React.FC<{ title: string; width: string; height: string }> = ({ title, width, height }) => (
    <div className={`bg-gray-200 rounded shadow p-4 ${width} ${height}`}>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
  
  const DealsCard: React.FC = () => {
    return (
      <div className="flex h-[600px] flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <Card title={cards[0].title} width={cards[0].width} height={cards[0].height} />
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap">
          {cards.slice(1).map((card) => (
            <div key={card.id} className="w-1/2 p-4">
              <Card title={card.title} width={card.width} height={card.height} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default DealsCard;