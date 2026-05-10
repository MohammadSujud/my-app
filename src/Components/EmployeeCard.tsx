import styles from "./EmployeeCard.module.css";

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
    <div className={styles.card}>
      <div className={styles.department}>
        {prop.company.department}
      </div>
      <div className={styles.name}>
        {prop.firstName} {prop.lastName}
      </div>
      <div className={styles.info}>
        <strong>Email:</strong> {prop.email}
      </div>
      <div className={styles.info}>
        <strong>Company:</strong> {prop.company.name}
      </div>
      <div className={styles.info}>
        <strong>Title:</strong> {prop.company.title}
      </div>
    </div>
  );
}

export default EmployeeCard;
