
const formInput = document.querySelector("#registration-form")
const inputName = document.querySelector("#name-input");
const inputAge = document.querySelector("#age-input");
const usersList = document.querySelector("#users-list");
const btnSubmit = document.querySelector("#register-btn")
const countUsers = document.querySelector("#count-users")

const errorModal = document.querySelector("#errorModal");
const errorMessage = document.querySelector("#errorMessage");
const closeModalBtn = document.querySelector("#closeModalBtn");


const userManager = createUserManager();
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    try {
        const clearAge = inputAge.value.trim()
        const userData = {
            name: inputName.value,
            age: clearAge === "" ? undefined : Number(clearAge)
        }
        
        const newUser = createUser(userData);
        userManager.addUser(newUser);

        const users = userManager.getUsers();

        countUsers.textContent= `Number of users: ${users.length}`;

        usersList.replaceChildren();
        users.forEach(user => {
            const {name,age} = user;
            
            const userCard = document.createElement("div");
            userCard.textContent = `${name}, ${age} years old`;
            usersList.append(userCard);
        });


        console.log("Adding succeed");
        inputName.value = "";
        inputAge.value = "";
    } catch (e) {
        errorMessage.textContent = e.message;
        errorModal.showModal(); // Показываем модалку
        console.log(e.message);
        
    } finally {
        console.log("Registration attempt completed");
        
    }
})

closeModalBtn.addEventListener("click", () => {
    errorModal.close();
})