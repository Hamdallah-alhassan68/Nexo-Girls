function shownavbar(){
            const navbar = document.querySelector('.navbar')
            navbar.style.display ='flex'
        }
        function hidenavbar(){
            const navbar = document.querySelector('.navbar')
            navbar.style.display =''
        }


        function Order(courseId) {
          let selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
          if (!selectedCourses.includes(courseId)) {
            selectedCourses.push(courseId);
            localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
          }
          window.location.href = 'Order.html';
        }