const loadMenu = () => {
    fetch('../data/menu.json')
        .then(response => response.json())
        .then(menu => {
            menu.forEach(category => {
                const {
                    title,
                    abbreviation: abbr,
                    emoji,
                    items
                } = category;
                const menuContent = document.querySelector(`.${abbr}-section > .menu-container > .menu-content`);
                const contentHeading = document.createElement('h1');
                contentHeading.innerHTML = `${title} <span>${emoji}</span>`;
                menuContent.appendChild(contentHeading);
                const list = document.createElement('ul');
                items.forEach(item => {
                    const listItem = document.createElement('li');
                    const itemTitle = document.createElement('h2');
                    itemTitle.innerText = item.title;
                    const itemDescription = document.createElement('p');
                    itemDescription.innerText = item.description;
                    listItem.appendChild(itemTitle);
                    listItem.appendChild(itemDescription);
                    list.appendChild(listItem);
                });
                menuContent.appendChild(list);
            });
        })
        .catch(err => console.log(err));
}
loadMenu();