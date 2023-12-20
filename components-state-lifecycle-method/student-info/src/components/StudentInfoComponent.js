import React from "react";

class StudentInfoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: "Nguyen Van A", age: 18, address: "Hanoi" }
      ],
    };
  }

  render() {
    const { students } = this.state;

    return (
      <div>
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentInfoComponent;
