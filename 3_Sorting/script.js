$(document).ready(function() {
    let integers = [];
    let entities = [];

    $('#sort-integer').click(function() {
        integers = $('#integer-array').val().split(',').map(Number);
        integers.sort((a, b) => a - b);
        displayResult(`Sorted Integer Array: [${integers.join(', ')}]`);
    });

    $('#sort-entities').click(function() {
        entities = $('#entities-array').val().split(',');
        entities.sort();
        displayResult(`Sorted Entities Array: [${entities.join(', ')}]`);
    });

    $('#search-integer').click(function() {
        const searchValue = parseInt($('#search-element').val());
        const index = integers.indexOf(searchValue);
        displayResult(`Index of ${searchValue} in Integer Array: ${index === -1 ? 'Not found' : index}`);
    });

    $('#search-entity').click(function() {
        const searchValue = $('#search-element').val();
        const index = entities.indexOf(searchValue);
        displayResult(`Index of ${searchValue} in Entities Array: ${index === -1 ? 'Not found' : index}`);
    });

    function displayResult(message) {
        $('#result').html(`<p>${message}</p>`);
    }
});
