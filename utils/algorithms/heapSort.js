export const heapSort = (array) => {
    const sortedArray = [...array];

    const heapify = (arr, length, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < length && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < length && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, length, largest);
        }
    };

    const buildMaxHeap = (arr) => {
        let length = arr.length;
        let i = Math.floor(length / 2 - 1);

        while (i >= 0) {
            heapify(arr, length, i);
            i--;
        }
    };

    const heapSortAlgorithm = (arr) => {
        buildMaxHeap(arr);
        let length = arr.length;

        while (length > 0) {
            [arr[0], arr[length - 1]] = [arr[length - 1], arr[0]];
            length--;
            heapify(arr, length, 0);
        }

        return arr;
    };

    return { sortedArray: heapSortAlgorithm(sortedArray), bigO: "O(n log n)" };
};