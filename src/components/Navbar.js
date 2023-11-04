import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ styles, count, onSearch, onChange }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.cartIconeContainer}>
        <div className={styles.cartIcon} style={{ color: "white" }}>
          The Cart Shop
        </div>
      </div>
      <div className={styles.searchInput}>
        <input
          placeholder="eg- Price, title, category..."
          onChange={onChange}
        />
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
