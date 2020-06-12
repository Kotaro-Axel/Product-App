

class Product{

    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class UI{

    addProduct(Product){

        const prodlist = document.getElementById('product-list');
        const newP = document.createElement('div'); 
        newP.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${Product.name}
                    <strong>Product Price</strong>: ${Product.price}
                    <strong>Product Year</strong>: ${Product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>

        `;
        prodlist.appendChild(newP);
    }


    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){

        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully' , 'warning');
        }

    }

    showMessage(message, cssClass){

        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-5`;
        div.appendChild(document.createTextNode(message));
        //Mostrando en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        } , 2200);
    }

}


//DOM Events

document.getElementById("product-form")
    .addEventListener("submit", function(e){
        const Name = document.getElementById('name').value;
        const Price = document.getElementById('price').value;
        const Year = document.getElementById('year').value;
        
        const product = new Product(Name, Price, Year);
        const ui = new UI();

        if(Name === '' || Price === '' || Year === ''){
            return ui.showMessage('Complete All Fields Please :)', 'danger');
        }


        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Product Added Successfully','success');

        e.preventDefault();
    })

document.getElementById('product-list')
    .addEventListener("click",function(e){

        const ui = new UI();
        ui.deleteProduct(e.target);
    })
