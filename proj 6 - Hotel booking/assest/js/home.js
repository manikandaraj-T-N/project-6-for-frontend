document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('open');
        navbarToggle.classList.toggle('open');
    });
});


document.addEventListener("DOMContentLoaded",function(){
    var checkinId=document.getElementById('check-in')
})



function showForm(formName) {
    // Hide all forms
    var forms = document.querySelectorAll('.form-inner-2');
    forms.forEach(function (form) {
        form.style.display = 'none';
    });

    // Show the corresponding form
    var form = document.getElementById(formName + 'Form');
    if (form) {
        form.style.display = 'block';
    }
}