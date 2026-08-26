
const groupOrder = ["Today", "Yesterday", "Previous 7 days", "Older"];
const recentsContainer = document.querySelector(".sidebar-recents");

function renderRecents(list) {
  recentsContainer.innerHTML = "";

  if (list.length === 0) {
    const noResults = document.createElement("p");
    noResults.className = "no-results";
    noResults.textContent = "No chats found.";
    recentsContainer.appendChild(noResults);
    return;
  }

  groupOrder.forEach(groupName => {
    const groupConvos = list.filter(c => c.group === groupName);
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
      deleteBtn.innerHTML = `<img src="assets/images/trash.svg" class="icon icon-grey">`;
      deleteBtn.addEventListener("click", () => {
        row.remove();
      });

      row.appendChild(btn);
      row.appendChild(deleteBtn);
      recentsContainer.appendChild(row);
    });
  });
}

renderRecents(conversations);

const searchIcon = document.querySelector(".search-icon");
const searchBox = document.getElementById("sidebar-search");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("open");
  if (searchBox.classList.contains("open")) {
    searchInput.focus();
  } else {
    searchInput.value = "";
    renderRecents(conversations);
  }
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    renderRecents(conversations);
    return;
  }

  const filtered = conversations.filter(c =>
    c.title.toLowerCase().includes(query)
  );
  renderRecents(filtered);
});

const collapseBtn = document.querySelector(".sidebar-icon");
const openBtn = document.getElementById("sidebar-open");
const sidebarContainer = document.querySelector(".sidebar-container");

if (window.innerWidth <= 480) {
  sidebarContainer.classList.add("collapsed");
}

collapseBtn.addEventListener("click", () => {
  sidebarContainer.classList.add("collapsed");
});

openBtn.addEventListener("click", () => {
  sidebarContainer.classList.remove("collapsed");
});

if (window.innerWidth <= 480) {
  sidebarContainer.classList.add("collapsed");
}