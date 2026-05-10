interface EmployeeCard {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  company: {
    department: string;
    name: string;
    title: string;
  };
}

function EmployeeCard(prop: EmployeeCard) {
  return (
    <>
      <div>
        <h3>Department Of {prop.company.department}</h3>
        <p>
          Name: {prop.firstName} {prop.lastName}
        </p>
        <p>Email: {prop.email}</p>
      </div>
    </>
  );
}

export default EmployeeCard;
