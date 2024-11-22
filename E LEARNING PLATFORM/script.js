// Responsive Navbar
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Course Filter Function
function filterCourses(category) {
    const courses = document.querySelectorAll('.course-card');
    courses.forEach((course) => {
        if (category === 'all' || course.dataset.category === category) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}
