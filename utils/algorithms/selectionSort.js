export const selectionSort = (array, addStep) => {
    const sortedArray = [...array];

    for (let i = 0; i < sortedArray.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [sortedArray[i], sortedArray[minIndex]] = [sortedArray[minIndex], sortedArray[i]];
            addStep([...sortedArray], i); // Record the step
        }
    }

    return { sortedArray, bigO: "O(n^2)" };
};