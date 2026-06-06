function addMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.classList.add(sender);
    div.innerText = message;
    chatBox.appendChild(div);

    // automatyczny scroll w dół po nowej wiadomości
    chatBox.scrollTop = chatBox.scrollHeight;
}

// analiza wiadomości użytkownika (if/else)
function botResponse(userInput) {
    // zamieniamy na małe litery, żeby bot rozumiał "Zimno" i "zimno"
    const text = userInput.toLowerCase();

    if (text.includes("zimno") || text.includes("7 stopni") || text.includes("śnieg")) {
        return "Załóż ciepłą kurtkę zimową, czapkę oraz wodoodporne buty. Styl: Zimowy.";
    } 
    else if (text.includes("deszcz") || text.includes("pada")) {
        return "Załóż kurtkę przeciwdeszczową z kapturem. Zabierz parasol! Styl: Praktyczny.";
    } 
    else if (text.includes("ciepło") || text.includes("słońce") || text.includes("lato")) {
        return "Wystarczy t-shirt i krótkie spodenki. Weź okulary przeciwsłoneczne. Styl: Letni casual.";
    } 
    else {
        return "Nie rozumiem tej pogody. Napisz np. 'zimno', 'deszcz' albo 'słońce'.";
    }
}

// funkcja wysyłania wiadomości 
function sendMessage() {
    const input = document.getElementById("user-input");
    const userText = input.value;

    if (userText.trim() === "") return; // Nie wysyłaj pustych

    addMessage(userText, "user-message");
    
    // dpowiada po małym opóźnieniu, żeby to wyglądało naturalnie
    setTimeout(() => {
        const response = botResponse(userText);
        addMessage(response, "bot-message");
    }, 500);

    input.value = ""; // Czyszczenie pola tekstowego
}

// wysyłanie enterem 
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});