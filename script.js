// Lista de voluntários
const volunteers = [
  {
    id: 1,
    name: "Carlos Silva",
    skills: "Primeiros socorros, resgate rápido",
    image:
      "https://media.discordapp.net/attachments/1084904133674406000/1325996866139066398/137b058b8f8f898f6d1bfb6119056564.jpg?ex=677dd250&is=677c80d0&hm=87494224541f2a060a6163e46181ce0f00da1a4f02a11c8d4c1cb6af164a7e73&=&format=webp&width=548&height=411",
  },
  {
    id: 2,
    name: "Ana Pereira",
    skills: "Cozinha comunitária, orientação",
    image:
      "https://media.discordapp.net/attachments/1084904133674406000/1325996866139066398/137b058b8f8f898f6d1bfb6119056564.jpg?ex=677dd250&is=677c80d0&hm=87494224541f2a060a6163e46181ce0f00da1a4f02a11c8d4c1cb6af164a7e73&=&format=webp&width=548&height=411",
  },
  {
    id: 3,
    name: "José Almeida",
    skills: "Monitoramento, logística",
    image:
      "https://media.discordapp.net/attachments/1084904133674406000/1325996866139066398/137b058b8f8f898f6d1bfb6119056564.jpg?ex=677dd250&is=677c80d0&hm=87494224541f2a060a6163e46181ce0f00da1a4f02a11c8d4c1cb6af164a7e73&=&format=webp&width=548&height=411",
  },
  {
    id: 4,
    name: "Maria Costa",
    skills: "Enfermeira, primeiros socorros",
    image:
      "https://media.discordapp.net/attachments/1084904133674406000/1325996866139066398/137b058b8f8f898f6d1bfb6119056564.jpg?ex=677dd250&is=677c80d0&hm=87494224541f2a060a6163e46181ce0f00da1a4f02a11c8d4c1cb6af164a7e73&=&format=webp&width=548&height=411",
  },
];

// Função para cadastrar a tarefa e sugerir voluntários
document.getElementById("register-task").addEventListener("click", () => {
  const taskName = document.getElementById("task-name").value;

  if (!taskName) {
    alert("Por favor, insira o nome da tarefa.");
    return;
  }

  const volunteerList = document.getElementById("volunteer-list");
  volunteerList.innerHTML = ""; // Limpa os resultados anteriores

  // Seleciona 3 voluntários aleatoriamente
  const selectedVolunteers = volunteers
    .sort(() => 0.5 - Math.random()) // Aleatoriza a lista de voluntários
    .slice(0, 3); // Seleciona os 3 primeiros

  // Renderiza os cards dos voluntários
  selectedVolunteers.forEach((volunteer) => {
    const card = document.createElement("li");
    card.className = "volunteer-card";

    card.innerHTML = `
      <img src="${volunteer.image}" alt="Foto do Voluntário">
      <h3>${volunteer.name}</h3>
      <p>${volunteer.skills}</p>
      <button class="allocate-btn" data-task="${taskName}" data-name="${volunteer.name}">Alocar</button>
    `;
    volunteerList.appendChild(card);
  });

  alert(`Tarefa "${taskName}" cadastrada com sucesso!`);
});

// Evento ao clicar em "Alocar"
document.getElementById("volunteer-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("allocate-btn")) {
    const taskName = e.target.getAttribute("data-task");
    const volunteerName = e.target.getAttribute("data-name");

    alert(`Voluntário "${volunteerName}" alocado com sucesso para a tarefa "${taskName}".`);
  }
});
