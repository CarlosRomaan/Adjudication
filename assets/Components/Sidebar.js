class Sidebar extends HTMLElement {
    constructor() {
        super();

        this.sidebarMenu = document.createElement("div");
        this.sidebarMenu.setAttribute("class", "sidebar-container");
        let linkStyle = document.createElement("link");
        linkStyle.setAttribute("rel", "stylesheet");
        linkStyle.setAttribute("href", "assets/Styles/Sidebar.css");

        this.appendChild(linkStyle);
        this.appendChild(this.sidebarMenu);
    }

    connectedCallback() {
        this.sidebarMenu.innerHTML = `
        <div class="sidebar">
        <div class="menu-btn">
          <i class="ph-bold ph-caret-left"></i>
        </div>
        <div class="head">
          <div class="user-img">
            <img src="assets/Images/logo.ico" alt="" />
          </div>
          <div class="user-details">
            <p class="title">Exela Technologies</p>
            <p class="name">Adjudication México</p>
          </div>
        </div>
        <div class="nav">
          <div class="menu">
            <p class="title">Main</p>
            <ul>
              <li>
                <a href="Index.html">
                  <i class="icon ph-bold ph-house-simple"></i>
                  <span class="text">Inicio</span>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="icon ph-bold ph-file-text"></i>
                  <span class="text">Lista de Códigos</span>
                  <i class="arrow ph-bold ph-caret-down"></i>
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="Arc.html">
                      <span class="text">Arc Codes</span>
                    </a>
                  </li>
                  <li>
                    <a href="DX.html">
                      <span class="text">DX Codes</span>
                    </a>
                  </li>
                  <li>
                    <a href="Modifiers.html">
                      <span class="text">Modifiers</span>
                    </a>
                  </li>
                  <li>
                    <a href="MIR.html">
                      <span class="text">Multiple Imaging Reduction</span>
                    </a>
                  </li>
                  <li>
                    <a href="PartBD.html">
                      <span class="text">Part B Vs D</span>
                    </a>
                  </li>
                  <li>
                    <a href="Suspend.html">
                      <span class="text">Suspend Reason</span>
                    </a>
                  </li>
                  <li>
                    <a href="Unlisted Codes.html">
                      <span class="text">Unlisted Codes</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="Faq.html">
                  <i class="icon ph-bold ph-question"></i>
                  <span class="text">Preguntas frecuentes</span>
                </a>
              </li>
              <li>
                <a href="POS.html">
                  <i class="icon ph-bold ph-map-pin"></i>
                  <span class="text">Place of Service</span>
                </a>
              </li>
              <li>
                <a href="Tools.html">
                  <i class="icon ph-bold ph-gear"></i>
                  <span class="text">Herramientas</span>
                </a>
              </li>
              <li>
                <a href="Guidelines.html">
                  <i class="icon ph-bold ph-book"></i>
                  <span class="text">Guidelines</span>
                </a>
              </li>
              <li>
                <a href="iCES.html">
                  <i class="icon ph-bold ph-squares-four"></i>
                  <span class="text">iCES Flags</span>
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
        `;
    }
}

customElements.define("sidebar-menu", Sidebar);

$(".menu > ul > li").click(function (e) {
  $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
  $(this).find("ul").slideToggle();
  $(this).siblings().find("ul").slideUp();
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});
