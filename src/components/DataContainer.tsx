// DataContainer.tsx
import DataList from './DataList';

function DataContainer() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">
        Welcome to the Rick and Morty App
      </h1>
      <DataList />
    </div>
  );
}

export default DataContainer;
