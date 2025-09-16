import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BestProducts from "../components/BestProducts";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");

  return (
    <div>
      <NavBar />
      <main className="container">
        <section>
          <h2>베스트 상품</h2>
          <BestProducts />
        </section>

        <section>
          <div className="product-controls">
            <SearchBar value={search} onChange={setSearch} />
            <SortDropdown value={sort} onChange={setSort} />
          </div>
          <ProductList search={search} sort={sort} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
