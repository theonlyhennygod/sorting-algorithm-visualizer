"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import AlgorithmSelector from '../components/AlgorithmSelector';
import ChartDisplay from '../components/ChartDisplay';
import { sortAlgorithms } from '../utils/sortAlgorithms';


const Home = () => {
  const [algorithm, setAlgorithm] = useState('bubbleSort');
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [bigONotation, setBigONotation] = useState('');

  const generateRandomData = () => {
    const randomData = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    setData(randomData);
    setSortedData([]);
    setBigONotation('');
  };

  const handleSort = () => {
    console.log('Current algorithm:', algorithm); 
    console.log('Available algorithms:', Object.keys(sortAlgorithms));
  
    const sortFunction = sortAlgorithms[algorithm];
  
    if (typeof sortFunction !== 'function') {
      console.error(`Algorithm '${algorithm}' is not a valid function.`);
      return; 
    }
  
    const { sortedArray, bigO } = sortFunction(data);
    setSortedData(sortedArray);
    setBigONotation(bigO);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <Navbar />
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-4xl font-bold text-center my-6">Sorting Algorithm Visualizer</h1>
        <AlgorithmSelector onSelect={setAlgorithm} />
        <div className="text-center p-4">
          <button onClick={generateRandomData} className="px-4 py-2 bg-blue-500 text-white rounded mr-4">
            Generate Data
          </button>
          <button onClick={handleSort} className="px-4 py-2 bg-green-500 text-white rounded">
            Sort Data
          </button>
        </div>
        <ChartDisplay data={sortedData.length ? sortedData : data} />
        {bigONotation && <p className="text-xl text-black dark:text-white text-center mt-4">Big O Notation: {bigONotation}</p>}
      </div>
    </div>
  );
};

export default Home;
