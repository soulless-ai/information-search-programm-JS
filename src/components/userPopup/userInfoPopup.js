export function showUserInfo(user, onClose) {
    fetch('./components/userPopup/userInfoPopup.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Не удалось загрузить шаблон информации о пользователе');
            }
            return response.text();
        })
        .then(template => {
            const popupContent = document.getElementById("popup-content");
            popupContent.innerHTML = template
                .replace('${user.name}', user.name)
                .replace('${user.phone}', user.phone)
                .replace('${user.email}', user.email)
                .replace('${user.hire_date}', user.hire_date)
                .replace('${user.position_name}', user.position_name)
                .replace('${user.department}', user.department);

            const userInfoPopup = document.getElementById("user-info-popup");
            userInfoPopup.style.display = "flex";

            userInfoPopup.addEventListener("click", (event) => {
                if (event.target === userInfoPopup) {
                    onClose();
                }
            });

            const closePopup = document.getElementById("close-popup");

            closePopup.addEventListener("click", (event) => {
                event.stopPropagation();
                onClose();
            });
        })
        .catch(error => {
            console.error(error);
        });
}