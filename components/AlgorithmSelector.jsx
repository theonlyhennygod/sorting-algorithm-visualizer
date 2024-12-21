"use client";

import React from 'react';

const AlgorithmSelector = ({ onSelect }) => {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-6">
      <label htmlFor="algorithm" className="mb-2 text-black dark:text-white text-xl">Select Algorithm:</label>
      <select id="algorithm" onChange={handleChange} className="p-2 border rounded w-40 dark:text-black">
        <option value="bubbleSort">Bubble Sort</option>
        <option value="quickSort">Quick Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="insertionSort">Insertion Sort</option>
        <option value="selectionSort">Selection Sort</option>
        <option value="heapSort">Heap Sort</option>
      </select>
    </div>
  );
};

export default AlgorithmSelector;
