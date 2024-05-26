document.addEventListener('DOMContentLoaded', () => {
    const apiDataDiv = document.getElementById('apiData');

    // Replace 'https://api.example.com/data' with the actual API endpoint you want to fetch data from
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Process the data and update the HTML
            let html = '<ul class="api-list">';
            data.forEach(item => {
                html += `
                    <li>
                        <strong>${item.title}</strong>
                        <span>${item.body}</span>
                    </li>
                `;
            });
            html += '</ul>';
            apiDataDiv.innerHTML = html;
        })
        .catch(error => {
            apiDataDiv.innerHTML = `Error: ${error.message}`;
        });
});
