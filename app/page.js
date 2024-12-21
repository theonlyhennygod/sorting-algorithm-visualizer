"use client";

import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import AlgorithmSelector from '../components/AlgorithmSelector';
import ChartDisplay from '../components/ChartDisplay';
import Footer from '../components/Footer';
import Card from '../components/Card'; // Import the Card component
import { sortAlgorithms } from '../utils/sortAlgorithms';
import { DarkModeProvider } from '../components/DarkModeContext';

const Home = () => {
  const [algorithm, setAlgorithm] = useState('bubbleSort');
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [bigONotation, setBigONotation] = useState('');
  const [isSorting, setIsSorting] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [speed, setSpeed] = useState(50); // Speed in slider value (0 to 100)
  const [currentElement, setCurrentElement] = useState(null);
  const stepsRef = useRef([]);
  const stepIndexRef = useRef(0);

  const generateRandomData = () => {
    const randomData = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    setData(randomData);
    setSortedData([]);
    setBigONotation('');
    setCurrentElement(null);
  };

  const handleSort = () => {
    setIsSorting(true);
    const { sortFunction, complexity } = sortAlgorithms[algorithm];

    if (typeof sortFunction !== 'function') {
      console.error(`Algorithm '${algorithm}' is not a valid function.`);
      setIsSorting(false);
      return;
    }

    const steps = [];
    const addStep = (array, currentIndex) => {
      steps.push({ array: [...array], currentIndex });
    };

    const { sortedArray, bigO } = sortFunction(data, addStep);
    setBigONotation(bigO);

    stepsRef.current = steps;
    stepIndexRef.current = 0;

    const interval = setInterval(() => {
      if (stepIndexRef.current < stepsRef.current.length) {
        setSortedData(stepsRef.current[stepIndexRef.current].array);
        setCurrentElement(stepsRef.current[stepIndexRef.current].currentIndex);
        stepIndexRef.current++;
      } else {
        clearInterval(interval);
        setIsSorting(false);
        setCurrentElement(null);
      }
    }, mapSpeedToInterval(speed)); // Use the mapped speed value
    setIntervalId(interval);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIsSorting(false);
  };

  const handleSpeedChange = (event) => {
    const newSpeed = Number(event.target.value);
    setSpeed(newSpeed);

    if (isSorting) {
      clearInterval(intervalId);
      const interval = setInterval(() => {
        if (stepIndexRef.current < stepsRef.current.length) {
          setSortedData(stepsRef.current[stepIndexRef.current].array);
          setCurrentElement(stepsRef.current[stepIndexRef.current].currentIndex);
          stepIndexRef.current++;
        } else {
          clearInterval(interval);
          setIsSorting(false);
          setCurrentElement(null);
        }
      }, mapSpeedToInterval(newSpeed)); // Use the mapped speed value
      setIntervalId(interval);
    }
  };

  const mapSpeedToInterval = (speed) => {
    // Map speed (0 to 100) to interval (1000ms to 10ms)
    return 1000 - (speed * 10);
  };

  useEffect(() => {
    if (isSorting) {
      handleSort();
    }
  }, [algorithm, data]);

  const handleAlgorithmChange = (newAlgorithm) => {
    if (isSorting) {
      handleStop();
    }
    setAlgorithm(newAlgorithm);
  };

  const { complexity, description, reason } = sortAlgorithms[algorithm];

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white flex flex-col">
        <Navbar />
        <main className="container mx-auto p-8 mt-8 flex-grow flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center my-6">Sort that Algo</h1>
          <AlgorithmSelector onSelect={handleAlgorithmChange} />
          <div className="text-center p-4 mb-6">
            <button onClick={generateRandomData} className="px-4 py-2 bg-blue-500 text-white rounded mr-4">
              Generate Data
            </button>
            <button onClick={isSorting ? handleStop : handleSort} className={`px-4 py-2 ${isSorting ? 'bg-red-500' : 'bg-green-500'} text-white rounded mr-4`}>
              {isSorting ? 'Stop' : 'Start'}
            </button>
          </div>
          {isSorting && (
            <div className="text-center p-4 mb-6">
              <label className="mr-4">Speed:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={speed}
                onChange={handleSpeedChange}
                className="w-64"
              />
            </div>
          )}
          <ChartDisplay data={sortedData.length ? sortedData : data} currentElement={currentElement} />
          {bigONotation && (
            <Card
              frontContent={
                <div>
                  <p className="text-xl text-black dark:text-white text-center mt-4 mb-6 underline">Big O Notation: {algorithm}</p>
                  <p className="text-lg text-black dark:text-white text-center mt-2">Average Case: {complexity.averageCase}</p>
                  <p className="text-lg text-black dark:text-white text-center mt-2">Best Case: {complexity.bestCase}</p>
                  <p className="text-lg text-black dark:text-white text-center mt-2">Worst Case: {complexity.worstCase}</p>
                  <p className="text-lg text-black dark:text-white text-center mt-2">Space Complexity: {complexity.spaceComplexity}</p>
                </div>
              }
              backContent={
                <div>
                  <p className="text-lg text-black dark:text-white text-center mt-2">{description}</p>
                  <p className="text-lg text-black dark:text-white text-center mt-2">{reason}</p>
                </div>
              }
            />
          )}
        </main>
        <Footer className="mt-8" />
      </div>
    </DarkModeProvider>
  );
};

export default Home;