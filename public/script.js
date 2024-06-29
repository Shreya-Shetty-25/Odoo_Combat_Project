document.getElementById('navbarToggler').addEventListener('click', function() {
    document.getElementById('navbarCollapse').classList.toggle('active');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('navbarCollapse').classList.remove('active');
});
