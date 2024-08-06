import { Student } from "./student.model";

describe('Student Models', () => {
  fit('Test_create_Student_instance', () => {
    const student: Student = {
      name: 'demo',
      department: 'demo',
      phonenumber: "7894561230"
    };
    expect(student).toBeTruthy();
    expect(student.name).toBe('demo');
    expect(student.department).toBe("demo");
    expect(student.phonenumber).toBe("7894561230");
  });

  // it('Week4_Day3_should_create_sttudent_instance_with_default_values', () => {
  //   const sttudent: sttudent = {
  //     name: 'sttudent B',
  //     maximumBudget: 2000000
  //   };
  //   expect(sttudent).toBeTruthy();
  //   expect(sttudent.name).toBe('sttudent B');
  //   expect(sttudent.maximumBudget).toBe(2000000);
  // });
});
