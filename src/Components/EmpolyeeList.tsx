import EmployeeCard from "./EmployeeCard";

function EmployeeList({
  employees,
  showAll,
}: {
  employees: EmployeeCard[];
  showAll: boolean;
}) {
  return (
    <div>
      {!showAll ? <h1>FilteredList</h1> : <h1>Employee List</h1>}

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          firstName={employee.firstName}
          lastName={employee.lastName}
          email={employee.email}
          image={employee.image}
          company={employee.company}
        />
      ))}
    </div>
  );
}
export default EmployeeList;
