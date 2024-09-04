import styles from "./styles/InventoryPage.module.css";
import SideNav from "./components/SideNav.js";
import InventoryPage from "./pages/inventoryPage.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.inventoryPage}>
      <SideNav />
      <div className={styles.inventoryContainer}>
        <Routes>
          <Route path="/" element={<InventoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
