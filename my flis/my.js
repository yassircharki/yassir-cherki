document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // Create message element
    var messageElement = document.createElement('div');
    messageElement.innerHTML = '<strong>' + name + ':</strong> ' + message;

    // Append message to messages container
    var messagesContainer = document.getElementById('messages-container');
    messagesContainer.appendChild(messageElement);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});