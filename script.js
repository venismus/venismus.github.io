// Basic chat placeholder
document.querySelector('input[type="text"]').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const msg = this.value;
        const chatWindow = document.querySelector('.chat-window');
        const userMsg = document.createElement('p');
        userMsg.textContent = "🧠 Ty: " + msg;
        chatWindow.appendChild(userMsg);
        this.value = "";
    }
});
