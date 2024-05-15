class Sidebar extends HTMLElement {
    constructor() {
        super();

        this.sidebarMenu = document.createElement("div");
        let linkStyle = document.createElement("link");
        linkStyle.setAttribute("rel", "stylesheet");
        linkStyle.setAttribute("href", "assets/Styles/Sidebar.css");

        this.appendChild(linkStyle);
        this.appendChild(this.sidebarMenu);
    }

    connectedCallback() {
        this.sidebarMenu.innerHTML = `
        <strong>Funcionando</strong>`;
    }
}

customElements.define("sidebar-menu", Sidebar);