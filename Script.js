function sendMessage() {
    const input = document.getElementById('msg-input');
    const chatBox = document.getElementById('chat-box');
    
    if (input.value.trim() !== "") {
        const msgDiv = document.createElement('div');
        msgDiv.className = "bg-indigo-600/50 p-3 rounded-lg max-w-xs ml-auto animate-fade-in";
        msgDiv.innerText = input.value;
        
        chatBox.appendChild(msgDiv);
        input.value = "";
        
        // Auto-scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function startCall() {
    document.getElementById('call-overlay').classList.remove('hidden');
    document.getElementById('call-overlay').classList.add('flex');
}

function endCall() {
    document.getElementById('call-overlay').classList.add('hidden');
    document.getElementById('call-overlay').classList.remove('flex');
}

// Allow "Enter" key to send message
document.getElementById('msg-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
