import { useState } from "react";
import Header from "./components/Header";

function App() {
    const [products, setProducts] = useState([
        { id: 1, title: 'Product 1', price: 899 },
        { id: 2, title: 'Product 2', price: 745 },
        { id: 3, title: 'Product 3', price: 235 },
        { id: 4, title: 'Product 4', price: 123 },
        { id: 5, title: 'Product 5', price: 514 }
    ]);

    return (
        <div>
            <Header />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
