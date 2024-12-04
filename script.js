const url = "https://api.freeapi.app/api/v1/public/randomusers";

async function getUsers() {
  const response = await fetch(url);
  const data = await response.json();
  const users = data.data.data;
  console.log(data);

  const usersBox = document.getElementById("users_box");
  usersBox.innerHTML = "";

  users.forEach((user) => {
    const userCard = createCard(user);
    usersBox.append(userCard);
  });
}

const createCard = (user) => {
  const { name, email, phone, gender, picture } = user;
  const { title, first, last } = name;
  const { thumbnail } = picture;

  const fullname = `${title} ${first} ${last}`;

  const card = document.createElement("div");
  card.classList.add("card");

  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photo");

  const img = document.createElement("img");
  img.src = thumbnail;

  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");

  const nameEl = document.createElement("h3");
  nameEl.classList.add("nmae");
  nameEl.innerHTML = fullname;

  const emailEl = document.createElement("p");
  emailEl.classList.add("email");
  emailEl.innerHTML = email;

  const phoneEl = document.createElement("p");
  phoneEl.classList.add("phone");
  phoneEl.innerHTML = phone;

  const genderInfoDiv = document.createElement("div");
  genderInfoDiv.classList.add("gender_info");

  const genderEl = document.createElement("span");
  genderEl.classList.add("gender");
  genderEl.innerHTML = gender;

  photoDiv.appendChild(img);
  genderInfoDiv.appendChild(genderEl);
  detailsDiv.append(nameEl, emailEl, phoneEl, genderInfoDiv);
  card.append(photoDiv, detailsDiv);

  return card;
};

getUsers();
