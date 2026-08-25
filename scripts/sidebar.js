const groupOrder = ["Today", "Yesterday", "Previous 7 days", "Older"];

const recentsContainer = document.querySelector(".sidebar-recents");

groupOrder.forEach(groupName => {
  const groupConvos = conversations.filter(c => c.group === groupName);

  if (groupConvos.length === 0) return;

  const heading = document.createElement("h3");
  heading.className = "recents-heading";
  heading.textContent = groupName;

  recentsContainer.appendChild(heading);

  groupConvos.forEach(convo => {
    const row = document.createElement("div");
    row.className = "recent-row";

    const btn = document.createElement("button");
    btn.className = "sidebar-recents-button";
    btn.textContent = convo.title;

    btn.addEventListener("click", () => {
      loadConversation(convo.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "recent-delete";

    deleteBtn.innerHTML =
      `<img src="assets/images/dots.svg" class="icon icon-grey">`;

    deleteBtn.addEventListener("click", () => {
      row.remove();
    });

    row.appendChild(btn);
    row.appendChild(deleteBtn);

    recentsContainer.appendChild(row);
  });
});


const collapseBtn = document.querySelector(".sidebar-icon");
const openBtn = document.getElementById("sidebar-open");
const sidebarContainer = document.querySelector(".sidebar-container");

collapseBtn.addEventListener("click", () => {
  sidebarContainer.classList.add("collapsed");
});

openBtn.addEventListener("click", () => {
  sidebarContainer.classList.remove("collapsed");
});