class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
          }
        :host {
          display: block;
          padding: 16px;
          width: 100%;
          background-color: #a13333 ;
          /*  #a13333 */
          color: white;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
        }
        
        :host a {
          color: #a13333 ;
          background-color: white ;
          /* white */
          border-radius: 5px;
        }

        h2 {
          padding: 16px;
        }
        </style>
        
        
        <h2>Barkas<a>inaja</a></h2>`;
    }
  }
  customElements.define('app-bar',AppBar);