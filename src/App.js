import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
    const [products, setProducts] = useState([
        { id: 1, title: 'Product 1', price: 899 },
        { id: 2, title: 'Product 2', price: 745 },
        { id: 3, title: 'Product 3', price: 235 },
        { id: 4, title: 'Product 4', price: 123 },
        { id: 5, title: 'Product 5', price: 514 }
    ]);

    const deleteProduct = (productId) => {
        const newProducts = products.filter(product => product.id !== productId);
        setProducts(newProducts);
    }

    const [name, setName] = useState('Luthfi');

    useEffect(() => {
        console.log('Use Effect Running');
    }, [name]);

    return (
        <div>
            <Header />
            <ProductList products={products} deleteProduct={deleteProduct}/>
            <button onClick={() => setName('Joko')}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default App;
