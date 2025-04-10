// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Sidebar Toggle
    const sidebarToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    sidebarToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-toggle')) {
            navMenu.classList.remove('show');
        }
    });

    // Tab Switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            changeTab(tabId);
        });
    });

    // Modal Handling
    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
        document.body.style.overflow = '';
    };

    // Close modals when clicking outside
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });
});

// Tab Switching Function
function changeTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to selected tab
    event.target.classList.add('active');
    
    // Show selected tab content
    document.getElementById('tab-' + tabId).classList.add('active');
}

// Detail Tab Switching
function changeDetailTab(tabId) {
    // Similar implementation as changeTab but scoped to modal
    const modal = document.getElementById('viewContactModal');
    
    modal.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    modal.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    event.target.classList.add('active');
    modal.getElementById('tab-' + tabId).classList.add('active');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    
    // Optional: Add overlay when sidebar is open
    const overlay = document.querySelector('.overlay') || document.createElement('div');
    if (!document.querySelector('.overlay')) {
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', toggleMobileMenu);
    }
    
    if (sidebar.classList.contains('active')) {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// View Contact
function viewContact() {
    openModal('viewContactModal');
}

// Add touch event support for mobile
document.addEventListener('touchstart', function() {}, {passive: true});
