// JavaScript for form submission handling
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Here you can add code to send this data to a backend or perform other actions
  
  // For example, logging to the console:
  console.log(`Booking Details:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}`);
});

