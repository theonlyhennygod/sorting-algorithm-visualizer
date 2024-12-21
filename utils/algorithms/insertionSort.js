export const insertionSort = (array) => {
    const sortedArray = [...array];

    for (let i = 1; i < sortedArray.length; i++) {
        let key = sortedArray[i];
        let j = i - 1;

        while (j >= 0 && sortedArray[j] > key) {
            sortedArray[j + 1] = sortedArray[j];
            j = j - 1;
        }
        sortedArray[j + 1] = key;
    }

    return { sortedArray, bigO: "O(n^2)" };
};