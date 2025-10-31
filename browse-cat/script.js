// Bottom Nav Active Class Toggling
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.bottom-nav-bar .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchContainer = document.querySelector('.search-bar-container');
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    // Toggle expansion when the icon is clicked
    searchIcon.addEventListener('click', function () {
        // Only allow expansion on desktop (where desktop-nav-links is visible)
        if (window.innerWidth > 768) {
            searchContainer.classList.toggle('expanded');

            if (searchContainer.classList.contains('expanded')) {
                // Focus the input field after a slight delay
                setTimeout(() => searchInput.focus(), 100);
            } else {
                // Blur/clear the input when collapsing
                searchInput.blur();
                searchInput.value = '';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterHeaders = document.querySelectorAll('.filter-header');

    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const block = this.closest('.filter-block');
            const body = block.querySelector('.filter-body');
            
            // 1. Toggle the 'collapsed' class on the parent block to control the arrow rotation
            block.classList.toggle('collapsed');
            
            // 2. Toggle the 'active' class on the filter body to trigger the accordion animation
            body.classList.toggle('active');
        });
    });
});