// pages/index.js
"use client";

import React, { useState, useEffect } from 'react';
import AlgorithmSelector from '../components/AlgorithmSelector';
import SortingChart from '../components/ChartDisplay';
import BigOChart from '../components/BigOChart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mergeSort, quickSort, getBigO } from '../utils/sortAlgorithms';

const Home = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]); // Add this line to declare sortedData state
  const [bigOData, setBigOData] = useState([]);
  const [algorithm, setAlgorithm] = useState('');

  useEffect(() => {
    const initialData = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    setData(initialData);
  }, []);

  const handleAlgorithmSelect = (alg) => {
    setAlgorithm(alg);
  };

  const generateRandomData = () => {
    const randomData = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setData(randomData);
    setSortedData([]);
    setBigOData([bigOData]);
  };

  const handleSort = () => {
    if (algorithm) {
      let sortedData = [];
      let bigO = '';
      switch (algorithm) {
        case 'mergeSort':
          sortedData = mergeSort(data);
          bigO = getBigO(algorithm);
          break;
        case 'quickSort':
          sortedData = quickSort(data);
          bigO = getBigO(algorithm);
          break;
        default:
          console.error('Unsupported algorithm selected');
          return;
      }
      setSortedData(sortedData);
      setBigOData(bigO);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 mb-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Sorting Algorithm Visualizer
        </h1>
        <AlgorithmSelector onSelect={handleAlgorithmSelect} />
        <div className="mt-10">
          <button onClick={generateRandomData} className="px-4 py-2 bg-blue-500 text-white rounded mr-4">
            Generate Data
          </button>
          <button onClick={handleSort} className="px-4 py-2 bg-green-500 text-white rounded">
            Sort Data
          </button>
        </div>
        <SortingChart data={data} />
        <BigOChart bigOData={bigOData} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
