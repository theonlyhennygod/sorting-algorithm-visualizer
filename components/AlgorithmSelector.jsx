"use client";

import { useState } from "react";

const AlgorithmSelector = ({ onSelect }) => {
  const [algorithm, setAlgorithm] = useState("bubbleSort");

  const handleSelect = (event) => {
    setAlgorithm(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-10">
        <label className="mb-2 text-black dark:text-white text-xl">Select Sorting Algorithm</label>
        <select
            value={algorithm}
            onChange={handleSelect}
            className="p-2 border rounded text-black w-40" // Added "w-48" class for width
        >
            <option value="bubbleSort">Bubble Sort</option>
            <option value="quickSort">Quick Sort</option>
            <option value="mergeSort">Merge Sort</option>
            <option value="insertionSort">Insertion Sort</option>
            <option value="selectionSort">Selection Sort</option>
            <option value="heapSort">Heap Sort</option>
            <option value="radixSort">Radix Sort</option>
            <option value="bucketSort">Bucket Sort</option>
            <option value="shellSort">Shell Sort</option>
            <option value="countingSort">Counting Sort</option>
        </select>
    </div>
  );
};

export default AlgorithmSelector;
