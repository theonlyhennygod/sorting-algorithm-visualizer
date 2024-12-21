export const mergeSort = (array, addStep) => {
    const sortedArray = [...array];

    const merge = (left, right, startIndex) => {
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

        result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

        // Update the original array with the merged result
        for (let i = 0; i < result.length; i++) {
            sortedArray[startIndex + i] = result[i];
            addStep([...sortedArray], startIndex + i); // Record the step
        }

        return result;
    };

    const mergeSortRecursive = (arr, startIndex) => {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        const merged = merge(
            mergeSortRecursive(left, startIndex),
            mergeSortRecursive(right, startIndex + middle),
            startIndex
        );

        return merged;
    };

    mergeSortRecursive(sortedArray, 0);
    return { sortedArray, bigO: "O(n log n)" };
};