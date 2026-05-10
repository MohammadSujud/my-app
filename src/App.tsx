import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar.tsx";
import EmployeeList from "./Components/EmpolyeeList.tsx";
import type EmployeeCard from "./Components/EmployeeCard.tsx";
function App() {
  function handleClear(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSearchQuery("");
  }
  function handleShowAll(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setShowAll(!showAll);
  }

  const [employees, setEmployees] = useState<EmployeeCard[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(true);
  const filteredEmployees = employees.filter((employee) =>
    employee.firstName
      .toLocaleLowerCase()
      .includes(searchQuery.toLocaleLowerCase()),
  );
  useEffect(function () {
    const abortController = new AbortController();
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log(data);
        setEmployees(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    return () => {
      abortController.abort(); // cancels the fetch
    };
  }, []);

  return (
    <div>
      <h1>React + TypeScript</h1>
      <NavBar
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        onClick={handleClear}
        handleShowAll={handleShowAll}
        showAll={showAll}
      />
      <p>Search Query: {searchQuery}</p>
      <p>Show All: {showAll.toString()}</p>
      {showAll && <EmployeeList employees={employees} showAll={showAll} />}
      {!showAll && (
        <EmployeeList employees={filteredEmployees} showAll={showAll} />
      )}
    </div>
  );
}
export default App;
