function showInfoBox(description) {
    var hiddenBox = document.getElementById('hiddenBox');
    var descriptionText = document.getElementById('descriptionText');
    
    descriptionText.textContent = description;
    hiddenBox.style.display = 'block';
}

// Close the box when clicking outside of it
document.addEventListener('click', function(event) {
    var hiddenBox = document.getElementById('hiddenBox');
    if (event.target !== hiddenBox && !hiddenBox.contains(event.target)) {
        hiddenBox.style.display = 'none';
    }
});


// for the cources  
