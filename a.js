document.addEventListener("DOMContentLoaded", function() {
    const timelineDates = document.querySelectorAll('.timeline-date');
  
    // Add event listeners to each timeline date
    timelineDates.forEach(date => {
      date.addEventListener('click', function() {
        // Remove active class from all dates
        timelineDates.forEach(d => d.classList.remove('active'));
  
        // Add active class to the clicked date
        date.classList.add('active');
      });
    });
  });
  