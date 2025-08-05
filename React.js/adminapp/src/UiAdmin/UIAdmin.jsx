import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from '../CssAdmin/DesignAdmin.module.css';
import iconsLogOut from '../Icons/icons8-logout-50.png';

export default function UIAdmin() {
  const fetchProducts = () => {
    console.log("Fetch products");
  };
  const DeleteProduct = () => {
    console.log("DeleteProduct");
  }

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Ẩn menu nếu ở trang Ship
  const hideMenu = location.pathname === "/admin/Uiadmin/Ship";

  return (
    <div className={styles.wrapper}>
      {!hideMenu && (
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}><Link to="Addproduct" className={styles.link}>Thêm sản phẩm</Link></li>
            <li className={styles.li}><Link to="Deleteproduct" className={styles.link}>Xoá sản phẩm</Link></li>
            <li className={styles.li}><Link to="Revenue" className={styles.link}>Doanh Thu</Link></li>
            <li className={styles.li}><Link to="Reports" className={styles.link}>Báo cáo sản phẩm</Link></li>
            <li className={styles.li}>
              <button onClick={handleLogout} className={styles.button}>
                <img src={iconsLogOut} alt="Log Out" className={styles.img} />
              </button>
            </li>
          </ul>
        </nav>
      )}

      <Outlet context={{ fetchProducts, DeleteProduct }} />
    </div>
  );
}
