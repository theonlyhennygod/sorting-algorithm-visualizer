"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AlgorithmSelector from '@/components/AlgorithmSelector';
import ChartDisplay from '@/components/ChartDisplay';
import ParticlesBackground from '@/components/ParticlesBackground';
import { sortAlgorithms } from '@/utils/sortAlgorithms';

const Home = () => {
  const [algorithm, setAlgorithm] = useState('bubbleSort');
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [bigONotation, setBigONotation] = useState('');

  const generateRandomData = () => {
    const randomData = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setData(randomData);
    setSortedData([]);
    setBigONotation('');
  };

  const handleSort = () => {
    const { sortedArray, bigO } = sortAlgorithms[algorithm](data);
    setSortedData(sortedArray);
    setBigONotation(bigO);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <Navbar />
      <ParticlesBackground />
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-4xl font-bold mb-10">Sorting Algorithm Visualizer</h1>
        <AlgorithmSelector onSelect={setAlgorithm} />
        <div className="mt-10">
          <button onClick={generateRandomData} className="px-4 py-2 bg-blue-500 text-white rounded mr-4">
            Generate Data
          </button>
          <button onClick={handleSort} className="px-4 py-2 bg-green-500 text-white rounded">
            Sort Data
          </button>
        </div>
        <ChartDisplay data={sortedData.length ? sortedData : data} />
        {bigONotation && <p className="mt-5 text-xl">Big O Notation: {bigONotation}</p>}
      </div>
    </div>
  );
};

export default Home;
