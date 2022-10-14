class Additem extends HTMLElement {
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
          
        input, button {
            font-size: 16px;
        }
        
        
        .input_section {
            display: flex;
            flex-direction: column;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            background-color: white;
        }
        
        .input_section > h2 {
            text-align: center;
            color: #A13333;
        }
        
        .input_section > form > .input {
            margin: 8px 0;
        }
        
        .input_section > form > button {
            background-color: #A13333;
            color: white;
            border: 0;
            border-radius: 5px;
            display: block;
            width: 100%;
            padding: 8px;
            cursor: pointer;
        }
        
        .input_section > form > button > span {
            font-weight: bold;
        }
        
        .input_section > form > .input > input {
            display: block;
            width: 100%;
            padding: 8px;
            border-radius: 5px;
            
        }
        
        .input_section > form > .input > label {
            color: #A13333;
            font-weight: bold;
        }
          </style>
          
          <section class="input_section">
            <h2>Tambahkan Barkasmu</h2>
            <form id="inputProduct">
                <div class="input">
                    <label for="inputProductId">Masukan Nama Barang</label>
                    <input id="inputProductId" type="text" required>
                </div>
                <div class="input">
                    <label for="inputProductName">Jenis</label>
                    <input id="inputProductName" type="text" required>
                </div>
                <div class="input">
                    <label for="inputProductDeskripsi">Deskripsi</label>
                    <input id="inputProductDeskripsi" type="text" required>
                </div>
                <button id="SubmitSave" type="submit"><span>Simpan barkas</span></button>
            </form>
        </section> `;

      }
    }
    customElements.define('add-item',Additem);