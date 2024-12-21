export const quickSort = (array, addStep) => {
    const sortedArray = [...array];

    const partition = (arr, low, high) => {
        const pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                addStep([...arr], i); // Record the step
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        addStep([...arr], i + 1); // Record the step
        return i + 1;
    };

    const quickSortRecursive = (arr, low, high) => {
        if (low < high) {
            const pi = partition(arr, low, high);
            quickSortRecursive(arr, low, pi - 1);
            quickSortRecursive(arr, pi + 1, high);
        }
    };

    quickSortRecursive(sortedArray, 0, sortedArray.length - 1);
    return { sortedArray, bigO: "O(n log n)" };
};