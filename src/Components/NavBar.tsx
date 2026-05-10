import styles from "./NavBar.module.css";

interface NavBarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleShowAll: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showAll: boolean;
}
function NavBar({
  onSearch,
  searchQuery,
  onClick,
  handleShowAll,
  showAll,
}: NavBarProps) {
  return (
    <nav className={styles.nav}>
      <label htmlFor="search" className={styles.label}>
        Search:
      </label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className={styles.input}
      />
      <button onClick={onClick} className={styles.button}>
        Clear
      </button>
      <button onClick={handleShowAll} className={styles.button}>
        {showAll ? "Hide All" : "Show All"}
      </button>
    </nav>
  );
}
export default NavBar;
