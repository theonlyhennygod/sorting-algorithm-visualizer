import { bubbleSort } from './algorithms/bubbleSort';
import { quickSort } from './algorithms/quickSort';
import { mergeSort } from './algorithms/mergeSort';
import { insertionSort } from './algorithms/insertionSort';
import { selectionSort } from './algorithms/selectionSort';
import { heapSort } from './algorithms/heapSort';

export const sortAlgorithms = {
    bubbleSort: {
        sortFunction: bubbleSort,
        complexity: {
            bigO: "O(n^2)",
            averageCase: "O(n^2)",
            bestCase: "O(n)",
            worstCase: "O(n^2)",
            spaceComplexity: "O(1)"
        },
        description: "Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
        reason: "Choose Bubble Sort for educational purposes or when working with small datasets where simplicity is more important than efficiency."
    },
    quickSort: {
        sortFunction: quickSort,
        complexity: {
            bigO: "O(n log n)",
            averageCase: "O(n log n)",
            bestCase: "O(n log n)",
            worstCase: "O(n^2)",
            spaceComplexity: "O(log n)"
        },
        description: "Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach to partition the array into smaller sub-arrays and sort them independently.",
        reason: "Choose Quick Sort for its efficiency and performance on large datasets. It is generally faster than other O(n log n) algorithms in practice."
    },
    mergeSort: {
        sortFunction: mergeSort,
        complexity: {
            bigO: "O(n log n)",
            averageCase: "O(n log n)",
            bestCase: "O(n log n)",
            worstCase: "O(n log n)",
            spaceComplexity: "O(n)"
        },
        description: "Merge Sort is a stable, comparison-based sorting algorithm that uses a divide-and-conquer approach to split the array into smaller sub-arrays, sort them, and then merge them back together.",
        reason: "Choose Merge Sort for its stability and predictable performance. It is a good choice for sorting linked lists and external sorting."
    },
    insertionSort: {
        sortFunction: insertionSort,
        complexity: {
            bigO: "O(n^2)",
            averageCase: "O(n^2)",
            bestCase: "O(n)",
            worstCase: "O(n^2)",
            spaceComplexity: "O(1)"
        },
        description: "Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one item at a time by repeatedly inserting the next item into the correct position.",
        reason: "Choose Insertion Sort for small datasets or nearly sorted data. It is efficient for small arrays and has low overhead."
    },
    selectionSort: {
        sortFunction: selectionSort,
        complexity: {
            bigO: "O(n^2)",
            averageCase: "O(n^2)",
            bestCase: "O(n^2)",
            worstCase: "O(n^2)",
            spaceComplexity: "O(1)"
        },
        description: "Selection Sort is a simple comparison-based sorting algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion of the array and swaps it with the first unsorted element.",
        reason: "Choose Selection Sort for its simplicity and ease of implementation. It is useful when memory space is limited."
    },
    heapSort: {
        sortFunction: heapSort,
        complexity: {
            bigO: "O(n log n)",
            averageCase: "O(n log n)",
            bestCase: "O(n log n)",
            worstCase: "O(n log n)",
            spaceComplexity: "O(1)"
        },
        description: "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. It repeatedly extracts the maximum (or minimum) element from the heap and rebuilds the heap.",
        reason: "Choose Heap Sort for its efficiency and in-place sorting. It is a good choice for large datasets where memory usage is a concern."
    }
};