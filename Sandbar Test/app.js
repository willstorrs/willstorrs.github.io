// app.js
document.addEventListener("DOMContentLoaded", function() {

    // select the form
    const form = document.getElementById('search-form');
    
    // handle form submission
    form.addEventListener('submit', function(event) {
  
      // prevent form from submitting (and thereby refreshing the page)
      event.preventDefault();
  
      // get search input
      let searchInput = document.getElementById('search-input').value;
  
      // form validation
      if (searchInput === '') {
        alert('Please enter a search query.');
      } else {
        console.log(`Form submitted with: ${searchInput}`);
        // Here, you can add any code to handle the search input, such as making a request to an API.
      }
    });
  });
  