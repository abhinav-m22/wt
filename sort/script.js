function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

function displayOutput(sortedArray, outputElementId) {
    const outputElement = document.getElementById(outputElementId);
    const outputItems = outputElement.querySelectorAll('.output-item');
    for (let i = 0; i < sortedArray.length; i++) {
        const outputItem = outputItems[i];
        outputItem.innerHTML = sortedArray[i];
    }
}

function reset(outputElement, value) {
    const outputItems = outputElement.querySelectorAll('.output-item');
    for (let i = 0; i < 10; i++) {
        const outputItem = outputItems[i];
        outputItem.innerHTML = value;
    }
}

document.getElementById('bubbleSortButton').addEventListener('click', function () {
    const inputArray = [];
    for (let i = 1; i <= 10; i++) {
        const inputElement = document.getElementById(`input${i}`);
        if (inputElement.value === '') {
            alert('Please enter all the values');
            return;
        }
        inputArray.push(parseInt(inputElement.value));
    }
    const sortedArray = bubbleSort(inputArray);
    displayOutput(sortedArray, 'bubbleSortOutput');
    const active = document.getElementById('bubbleSortOutput');
    active.classList.add('active');
    const inactive = document.getElementById('quickSortOutput');
    inactive.classList.remove('active');
    const inactive2 = document.getElementById('mergeSortOutput');
    inactive2.classList.remove('active');
    const inactive3 = document.getElementById('selSortOutput');
    inactive3.classList.remove('active');
});

document.getElementById('quickSortButton').addEventListener('click', function () {
    const inputArray = [];
    for (let i = 1; i <= 10; i++) {
        const inputElement = document.getElementById(`input${i}`);
        if (inputElement.value === '') {
            alert('Please enter all the values');
            return;
        }
        inputArray.push(parseInt(inputElement.value));
    }
    const sortedArray = quickSort(inputArray);
    displayOutput(sortedArray, 'quickSortOutput');

    const active = document.getElementById('quickSortOutput');
    active.classList.add('active');
    const inactive = document.getElementById('bubbleSortOutput');
    inactive.classList.remove('active');
    const inactive2 = document.getElementById('mergeSortOutput');
    inactive2.classList.remove('active');
    const inactive3 = document.getElementById('selSortOutput');
    inactive3.classList.remove('active');
});

document.getElementById('mergeSortButton').addEventListener('click', function () {
    const inputArray = [];
    for (let i = 1; i <= 10; i++) {
        const inputElement = document.getElementById(`input${i}`);

        if (inputElement.value === '') {
            alert('Please enter all the values');
            return;
        }
        inputArray.push(parseInt(inputElement.value));
    }
    const sortedArray = mergeSort(inputArray);
    displayOutput(sortedArray, 'mergeSortOutput');

    const active = document.getElementById('mergeSortOutput');
    active.classList.add('active');
    const inactive = document.getElementById('bubbleSortOutput');
    inactive.classList.remove('active');
    const inactive2 = document.getElementById('quickSortOutput');
    inactive2.classList.remove('active');
    const inactive3 = document.getElementById('selSortOutput');
    inactive3.classList.remove('active');
});

document.getElementById('selSortButton').addEventListener('click', function () {
    const inputArray = [];
    for (let i = 1; i <= 10; i++) {
        const inputElement = document.getElementById(`input${i}`);
        if (inputElement.value === '') {
            alert('Please enter all the values');
            return;
        }
        inputArray.push(parseInt(inputElement.value));
    }
    const sortedArray = selectionSort(inputArray);
    displayOutput(sortedArray, 'selSortOutput');

    const active = document.getElementById('selSortOutput');
    active.classList.add('active');
    const inactive = document.getElementById('bubbleSortOutput');
    inactive.classList.remove('active');
    const inactive2 = document.getElementById('quickSortOutput');
    inactive2.classList.remove('active');
    const inactive3 = document.getElementById('mergeSortOutput');
    inactive3.classList.remove('active');
});

document.getElementById('reset').addEventListener('click', function () {
    const inputArray = [];
    for (let i = 1; i <= 10; i++) {
        const inputElement = document.getElementById(`input${i}`);
        inputElement.value = '';
    }
    const outputElement = document.getElementById('bubbleSortOutput');
    reset(outputElement, 0);
    const outputElement2 = document.getElementById('quickSortOutput');
    reset(outputElement2, 0);
    const outputElement3 = document.getElementById('mergeSortOutput');
    reset(outputElement3, 0);
    const outputElement4 = document.getElementById('selSortOutput');
    reset(outputElement4, 0);
    const active = document.getElementById('bubbleSortOutput');
    active.classList.remove('active');
    const inactive = document.getElementById('quickSortOutput');
    inactive.classList.remove('active');
    const inactive2 = document.getElementById('mergeSortOutput');
    inactive2.classList.remove('active');
    const inactive3 = document.getElementById('selSortOutput');
    inactive3.classList.remove('active');
});