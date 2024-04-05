document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        profession: document.querySelector('input[name="profession"]:checked').value,
        language: document.getElementById('language').value,
        contact: document.getElementById('contact').value,
        birthdate: document.getElementById('birthdate').value
    };

    // Redirect based on profession
    switch (formData.profession) {
        case 'housekeeping':
            window.open('index1.html?' + serialize(formData), '_blank');
            break;
        case 'bartender':
            window.open('index2.html?' + serialize(formData), '_blank');
            break;
        case 'cleaningstaff':
            window.open('index3.html?' + serialize(formData), '_blank');
            break;
        default:
            alert('Please select a valid profession.');
            break;
    }
});

// Function to serialize object to query parameters
function serialize(obj) {
    var str = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
        }
    }
    return str.join("&");
}