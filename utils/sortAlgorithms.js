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
};
