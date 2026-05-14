document.addEventListener('DOMContentLoaded', function() {
    var footerPlaceholder = document.getElementById('site-footer');
    if (!footerPlaceholder) {
        return;
    }
    fetch('footer.html')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Footer file not found: ' + response.status);
            }
            return response.text();
        })
        .then(function(html) {
            footerPlaceholder.innerHTML = html;
        })
        .catch(function(error) {
            console.error('Error loading footer:', error);
        });
});