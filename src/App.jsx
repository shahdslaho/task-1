// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ProdactCard from "./component/ProdactCard";
import { useState } from "react";
import axios from "axios";
ProdactCard
function App() {
  const [Prodact,setProdact] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProdact(res.data.products))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
 {error ? (
        <div style={{ color: "red" }}>Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-2 md:gap-16 lg:grid-cols-3 px-16 gap-6 md:px-16  bg-[#f5ebe7] py-16">
          {Prodact.length > 0 ? (
            Prodact.map((product) => (
          
                <ProdactCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                  image={product.thumbnail}
                />
             
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
