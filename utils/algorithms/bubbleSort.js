export const bubbleSort = (array) => {
    let sortedArray = [...array];
    let n = sortedArray.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (sortedArray[i] > sortedArray[i + 1]) {
                [sortedArray[i], sortedArray[i + 1]] = [sortedArray[i + 1], sortedArray[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return { sortedArray, bigO: "O(n^2)" };
};