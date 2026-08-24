const recentsContainer = document.querySelector(".sidebar-recents");

conversations.forEach(convo => {
  const btn = document.createElement("button");
  btn.className = "sidebar-recents-button";
  btn.textContent = convo.title;
  btn.addEventListener("click", () => loadConversation(convo.id));
  recentsContainer.appendChild(btn);
});