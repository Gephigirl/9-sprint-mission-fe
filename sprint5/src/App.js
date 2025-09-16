import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import BestProducts from "./components/BestProducts";
import TopBar from "./components/TopBar"; 
import "./App.css"; 

function App() {
  // 서버에서 지원하는 값으로 초기화
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent"); // "recent" 또는 "like"

  const handleRegisterClick = () => {
    console.log("상품 등록 클릭됨!");
  };

  return (
    <div className="app">
      <NavBar />
      <main>
        <BestProducts />
        <TopBar
          searchValue={search}
          onSearchChange={setSearch}
          sortValue={sort}
          onSortChange={setSort}
          onRegisterClick={handleRegisterClick}
        />
        <ProductList search={search} sort={sort} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
