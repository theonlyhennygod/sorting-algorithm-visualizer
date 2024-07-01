export const sortAlgorithms = {
    bubbleSort: (array) => {
        let arr = [...array];
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swapped = true;
                }
            }
        } while (swapped);
        return { sortedArray: arr, bigO: "O(n^2)" };
    },

    quickSort: (array) => {
        const quickSortRec = (arr) => {
            if (arr.length <= 1) {
                return arr;
            }

            const pivot = arr[Math.floor(arr.length / 2)];
            const left = arr.filter((x) => x < pivot);
            const middle = arr.filter((x) => x === pivot);
            const right = arr.filter((x) => x > pivot);

            return [...quickSortRec(left), ...middle, ...quickSortRec(right)];
        };

        return { sortedArray: quickSortRec(array), bigO: "O(n log n)" };
    },

    mergeSort: (array) => {
        const merge = (left, right) => {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;

            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }

            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        };

        const mergeSortRec = (arr) => {
            if (arr.length <= 1) {
                return arr;
            }

            const mid = Math.floor(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);

            return merge(mergeSortRec(left), mergeSortRec(right));
        };

        return { sortedArray: mergeSortRec(array), bigO: "O(n log n)" };
    },

    insertionSort: (array) => {
        let arr = [...array];
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return { sortedArray: arr, bigO: "O(n^2)" };
    },

    selectionSort: (array) => {
        let arr = [...array];
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        return { sortedArray: arr, bigO: "O(n^2)" };
    },

    heapSort: (array) => {
        const heapify = (arr, n, i) => {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }

            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }

            if (largest !== i) {
                [arr[i], arr[largest]] = [arr[largest], arr[i]];
                heapify(arr, n, largest);
            }
        };

        const heapSortRec = (arr) => {
            let n = arr.length;

            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }

            for (let i = n - 1; i > 0; i--) {
                [arr[0], arr[i]] = [arr[i], arr[0]];
                heapify(arr, i, 0);
            }

            return arr;
        };

        return { sortedArray: heapSortRec([...array]), bigO: "O(n log n)" };
    },
    // Add the new sorting algorithm here
};
