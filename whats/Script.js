// pegas os elemento 

// Seleciona elementos do DOM
const input = document.getElementById("msginput");
const sendBtn = document.getElementById("sendBtn");
const messageContainer = document.getElementById("message");

// Função para adicionar mensagem
function addMessage(text, type = "sent") {
    if (!text.trim()) return; // não envia vazio

    // Criar div da mensagem
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", type);
    msgDiv.innerHTML = `
        ${text}
        <span class="meta">${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
    `;

    // Adicionar ao container
    messageContainer.appendChild(msgDiv);

    // Rolar para o fim
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Evento de clique no botão
sendBtn.addEventListener("click", () => {
    const text = input.value;
    addMessage(text, "sent");
    input.value = "";

    // Simular resposta automática depois de 1s
    setTimeout(() => {
        addMessage("Recebido ✔✔", "received");
    }, 1000);
});

// Enviar mensagem com Enter
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
