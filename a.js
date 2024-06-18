document.addEventListener("DOMContentLoaded", function() {
    const timelineDates = document.querySelectorAll('.timeline-date');
  
  
    timelineDates.forEach(date => {
      date.addEventListener('click', function() {
     
        timelineDates.forEach(d => d.classList.remove('active'));
  
        
        date.classList.add('active');
      });
    });
  });
  