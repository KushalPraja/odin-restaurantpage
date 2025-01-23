function createMenuPage() {
    const menuPage = document.getElementById("content");

    // Clear previous content (if any)
    menuPage.innerHTML = "";

    // Create the menu title
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    menuPage.appendChild(menuTitle);

    // Create the menu list
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    const menuItems = [
        { name: "Spaghetti Carbonara", price: "$12" },
        { name: "Margherita Pizza", price: "$10" },
        { name: "Caesar Salad", price: "$8" },
        { name: "Tiramisu", price: "$6" },
    ];

    // Populate the menu items
    menuItems.forEach((item) => {
        const menuItem = document.createElement("li");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("span");
        itemName.textContent = item.name;
        itemName.classList.add("menu-item-name");
        menuItem.appendChild(itemName);

        const itemPrice = document.createElement("span");
        itemPrice.textContent = item.price;
        itemPrice.classList.add("menu-item-price");
        menuItem.appendChild(itemPrice);

        menuList.appendChild(menuItem);
    });

    menuPage.appendChild(menuList);
    return menuPage;
}

export default createMenuPage;

