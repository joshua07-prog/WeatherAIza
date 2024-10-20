const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    appendMessage('You: ' + userMessage);
    userInput.value = '';

    const botResponse = getBotResponse(userMessage);
    appendMessage('AIza: ' + botResponse);
}

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (lowerInput.includes('help')) {
        return 'Sure! What do you need help with?';
    } else if (lowerInput.includes('weather')) {
        return 'What is your weather condition?';
    } else if (lowerInput.includes('rainy')) {
        return 'Take an umbrella.';
    } else if (lowerInput.includes('sunny')) {
        return 'Wear sunglasses';
    } else if (lowerInput.includes('cold')) {
        return 'Wear a jacket.';
    } else if (lowerInput.includes('hot')) {
        return 'Drink plenty of water.'
    } else {
        return 'I am sorry, I do not understand that.';
    } 
}     
    
