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
    <nav>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={onClick}>Clear</button>
      <button onClick={handleShowAll}>
        {showAll ? "Hide All" : "Show All"}
      </button>
    </nav>
  );
}
export default NavBar;
