// DataCard.tsx
import { Character } from './types/types';

function DataCard({ item }: { item: Character }) {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <span
        className={`absolute top-0 left-0  px-4 py-2 rounded-br-lg text-sm font-semibold text-white ${
          item.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        {item.status}
      </span>
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
        <p className="text-gray-700">{item.species}</p>
        <p className="text-gray-700">{item.gender}</p>
        <p className="text-gray-500 text-sm mt-2">
          Location: {item.location.name}
        </p>
        <p className="text-gray-500 text-sm">Origin: {item.origin.name}</p>
      </div>
    </div>
  );
}

export default DataCard;
