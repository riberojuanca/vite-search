import { useState } from "react";

type Product = { name: string; email: string };

function Search() {
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [filtredProducts, setFiltredProducts] = useState<Product[]>([]);

  const products: Product[] = [
    {
      name: "Manolo",
      email: "manolo@hotmail.com",
    },
    {
      name: "Mario",
      email: "mario@gmail.com",
    },
    {
      name: "Juan",
      email: "juan@gmail.com",
    },
    {
      name: "Guido",
      email: "guido@gmail.com",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setSearch(value);

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.email.toLowerCase().includes(value.toLowerCase())
    );
    setFiltredProducts(filtered);
  };

  console.log(search);

  return (
    <section>
      <div className="searchEngine">
        <h2>Buscador</h2>
        <input
          onChange={handleInputChange}
          type="text"
          name="searchInput"
          value={inputValue}
        />
      </div>
      {filtredProducts.map((product) => (
        <div className="filtredProducts">
          <h3>
            {product.name} - {product.email}
          </h3>
        </div>
      ))}
    </section>
  );
}

export default Search;
