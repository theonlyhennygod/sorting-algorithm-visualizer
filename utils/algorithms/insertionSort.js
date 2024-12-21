export const insertionSort = (array, addStep) => {
    const sortedArray = [...array];

    for (let i = 1; i < sortedArray.length; i++) {
        let key = sortedArray[i];
        let j = i - 1;

        while (j >= 0 && sortedArray[j] > key) {
            sortedArray[j + 1] = sortedArray[j];
            j = j - 1;
            addStep([...sortedArray], j + 1); // Record the step
        }
        sortedArray[j + 1] = key;
        addStep([...sortedArray], j + 1); // Record the step
    }

    return { sortedArray, bigO: "O(n^2)" };
};