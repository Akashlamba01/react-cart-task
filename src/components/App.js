import Cart from "./Cart";
import Navbar from "./Navbar";
import styles from "../styles/navbar.module.css";
import Data from "../ProductData/data.json";
import { useState } from "react";

function App() {
  const [DataFile, setDataFile] = useState(Data.products);
  const [Result, setResult] = useState(Data.products);

  const searchChange = (e) => {
    const keyword = e.target.value.toLowerCase();

    const searchResult = DataFile.filter(
      (element) =>
        element.title.toLowerCase().includes(keyword) ||
        element.category.toLowerCase().includes(keyword) ||
        element.description.toLowerCase().includes(keyword) ||
        (element.price.toString().includes(keyword) && !isNaN(keyword))
    );

    console.log(searchResult);
    setResult(searchResult);
  };

  const onSearch = () => {
    setResult(Data);
  };

  return (
    <div className="App">
      <Navbar
        count={0}
        styles={styles}
        onChange={searchChange}
        onSearch={onSearch}
      />
      <div>
        <Cart data={Result !== null ? Result : DataFile} />
      </div>
    </div>
  );
}

export default App;
