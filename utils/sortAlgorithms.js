export const sortAlgorithms = {
    bubbleSort: (array) => {
        let arr = [...array];
        let n = arr.length;
        let bigO = 'O(n^2)';
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return { sortedArray: arr, bigO };
    },
    // Add more sorting algorithms with their big O notation
    quickSort: (array) => {
        // quick sort implementation
    },
    mergeSort: (array) => {
        // merge sort implementation
    },
    // etc.
};
