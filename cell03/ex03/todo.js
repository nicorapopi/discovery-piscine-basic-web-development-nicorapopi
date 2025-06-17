window.onload = function () {
  const saved = getCookie("todos");
  if (saved) {
    const items = JSON.parse(saved);
    items.forEach((text) => {
      createTodo(text);
    });
  }
};

document.getElementById("newBtn").addEventListener("click", () => {
  const text = prompt("Enter a new task:");
  if (text && text.trim() !== "") {
    createTodo(text.trim());
    saveTodos();
  }
});

function createTodo(text) {
  const div = document.createElement("div");
  div.className = "todo";
  div.innerText = text;

  div.addEventListener("click", () => {
    if (confirm("ทำเสร็จแล้วใช่ป่าว? เอาดี? ลบเลยใช่ไหม?")) {
      div.remove();
      saveTodos();
    }
  });

  const list = document.getElementById("ft_list");
  list.insertBefore(div, list.firstChild);
}

function saveTodos() {
  const todos = [];
  document.querySelectorAll("#ft_list .todo").forEach((el) => {
    todos.push(el.innerText);
  });
  setCookie("todos", JSON.stringify(todos), 365);
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split("=");
    if (parts[0] === name) {
      return decodeURIComponent(parts[1]);
    }
  }
  return null;
}
