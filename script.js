// Function to capitalize input value when the input field loses focus
document.getElementById('fname').addEventListener('blur', function() {
    // Get the current value of the input field
    let inputValue = this.value;
    
    // Convert the value to uppercase
    this.value = inputValue.toUpperCase();
});
