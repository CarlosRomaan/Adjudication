class AccordionItem extends HTMLElement {
    constructor() {
        super();

        this.accordion = document.createElement("div");
        this.accordion.setAttribute("class", "accordion-container");

        let linkStyle = document.createElement("link");
        linkStyle.setAttribute("rel", "stylesheet");
        linkStyle.setAttribute("href", "assets/Styles/Accordion.css");

        this.appendChild(linkStyle);
        this.appendChild(this.accordion);
    }

    connectedCallback() {
        this.accordion.innerHTML = `
        <details>
            <summary>
                <span class="faq-title">
                    ${this.getAttribute("data-title")}
                </span>
                <img src="assets/Images/Icons/plus.svg" class="expand-icon" alt="Plus">
            </summary>
            <div class="faq-content">
                ${this.getAttribute("data-content")}                
            </div>
        </details>`;
    }
}

customElements.define("accordion-item", AccordionItem);

/* `` */

class Accordion {
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector('summary');
        this.content = el.querySelector('.faq-content');
        this.expandIcon = this.summary.querySelector('.expand-icon')
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.summary.addEventListener('click', (e) => this.onClick(e));
    }

    onClick(e) {
        e.preventDefault();
        this.el.style.overflow = 'hidden';

        if (this.isClosing || !this.el.open) {
            this.open();
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }

    shrink() {
        this.isClosing = true;

        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });

        this.animation.onfinish = () => {
            this.expandIcon.setAttribute('src', 'assets/Images/Icons/plus.svg');
            return this.onAnimationFinish(false);
        }
        this.animation.oncancel = () => {
            this.expandIcon.setAttribute('src', 'assets/Images/Icons/plus.svg');
            return this.isClosing = false;
        }
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`;
        this.el.open = true;
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isExpanding = true;

        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight +
            this.content.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 350,
            easing: 'ease-out'
        });

        this.animation.onfinish = () => {
            this.expandIcon.setAttribute(
                'src',
                'assets/Images/Icons/minus.svg'
            );
            return this.onAnimationFinish(true);
        }
        this.animation.oncancel = () => {
            this.expandIcon.setAttribute(
                'src',
                'assets/Images/Icons/minus.svg'
            );
            return this.isExpanding = false;
        }
    }

    onAnimationFinish(open) {
        this.el.open = open;
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.el.style.height = this.el.style.overflow = '';
    }
}

document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
});
