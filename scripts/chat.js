function loadConversation(id) {
  const convo = conversations.find(c => c.id === id);

  document.querySelector(".main-chat").classList.add("active");
  //document.getElementById("main-empty").style.display = "none";

  const chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = "";
  // chatMessages.style.display = "flex";

  convo.messages.forEach(msg => {
    const bubble = document.createElement("div");
    bubble.className = msg.role === "user" ? "message message-user" : "message message-assistant";

    if (msg.code) {
      bubble.innerHTML = `<pre class="code-block">${msg.code}</pre>`;
    } else {
      bubble.textContent = msg.text;
    }

    chatMessages.appendChild(bubble);
  });
}

document.getElementById("newchat").addEventListener("click", () => {
  const mainChat = document.querySelector(".main-chat");
  mainChat.classList.remove("active");
  document.getElementById("chat-messages").innerHTML = "";
  document.getElementById("chat-input").value = "";
});