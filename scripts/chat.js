function loadConversation(id) {
  const convo = conversations.find(c => c.id === id);

  document.querySelector(".main-chat").classList.add("active");

  const chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = "";

  convo.messages.forEach(msg => {
    const bubble = document.createElement("div");
    bubble.className = msg.role === "user" ? "message message-user" : "message message-assistant";

    if (msg.code) {
      const pre = document.createElement("pre");
      pre.className = "code-block";
      pre.textContent = msg.code;
      bubble.appendChild(pre);
    } else {
      bubble.textContent = msg.text;
    }

    chatMessages.appendChild(bubble);

    if (msg.role === "assistant") {
      const actions = document.createElement("div");
      actions.className = "message-actions";
      actions.innerHTML = `
        <button class="action-btn copy-btn" ><img src="../assets/images/clipboard.svg" class="icon icon-grey"></button>
        <button class="action-btn like-btn"><img src="../assets/images/thumb-up.svg" class="icon icon-grey"></button>
        <button class="action-btn dislike-btn"><img src="../assets/images/thumb-down.svg" class="icon icon-grey"></button>
        <button class="action-btn regen-btn"><img src="../assets/images/refresh.svg" class="icon icon-grey"></button>
        <button class="action-btn more-btn" ><img src="../assets/images/dots.svg" class="icon icon-grey"></button>
      `;
      chatMessages.appendChild(actions);

      const dislikeBtn=actions.querySelector('.dislike-btn');

      const copyBtn = actions.querySelector(".copy-btn");
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(bubble.textContent);
        //alert('Copied to Clipboard');
        copyBtn.classList.add("copied");
        setTimeout(() => copyBtn.classList.remove("copied"), 2000);
  });
      const likeBtn=actions.querySelector('.like-btn');
      likeBtn.addEventListener('click', ()=>{
        likeBtn.classList.toggle("liked"); 
        dislikeBtn.classList.remove("disliked");
      });
      dislikeBtn.addEventListener('click', ()=>{
        dislikeBtn.classList.toggle("disliked"); 
        likeBtn.classList.remove("liked");
      });
    }
  });
}

document.getElementById("newchat").addEventListener("click", () => {
  const mainChat = document.querySelector(".main-chat");
  mainChat.classList.remove("active");
  document.getElementById("chat-messages").innerHTML = "";
  document.getElementById("chat-input").value = "";

  document.getElementById("empty-heading").innerHTML = `<h1 class="main-empty-heading">Ready when you are.</h1>`;
  document.getElementById("empty-suggestions").style.display = "block";
});

const tempBtn = document.getElementById("temp-toggle");
const emptyHeading = document.getElementById("empty-heading");
const emptySuggestions = document.getElementById("empty-suggestions");

const defaultHeadingHTML = emptyHeading.innerHTML;
let isTemp = false;

tempBtn.addEventListener("click", () => {
  document.querySelector(".main-chat").classList.remove("active");
  document.getElementById("chat-messages").innerHTML = "";

  isTemp = !isTemp;

  if (isTemp) {
    emptyHeading.innerHTML = `
      <h1 class="main-empty-heading">Temporary chat</h1>
      <p class="temp-subtext">This chat won't appear in history or be used to train our models.</p>
    `;
    emptySuggestions.style.display = "none";
  } else {
    emptyHeading.innerHTML = defaultHeadingHTML;
    emptySuggestions.style.display = "block";
  }
});