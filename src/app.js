import { getUsers } from "./services/userServices.js";
import { displayUsers } from "./components/userList/userList.js";
import { handleSearchInput } from "./components/searchBar.js";
import { showUserInfo } from "./components/userPopup/userInfoPopup.js";

const searchInput = document.getElementById("search");
const userInfoPopup = document.getElementById("user-info-popup");

handleSearchInput(searchInput, (query) => {
  getUsers(query).then((users) => {
    displayUsers(users, (user) => {
      showUserInfo(user, () => {
        userInfoPopup.style.display = "none";
      });
    });
  });
});

getUsers().then((users) => {
  displayUsers(users, (user) => {
    showUserInfo(user, () => {
      userInfoPopup.style.display = "none";
    });
  });
});