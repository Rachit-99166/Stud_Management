import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { Student } from 'src/models/student.model';

describe('AdminService Integration Tests', () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StudentService]
    });
    service = TestBed.inject(StudentService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

  });

  // afterEach(() => {
  //   const httpMock = TestBed.inject(HttpTestingController);
  //   httpMock.verify(); // Verify that there are no open requests after each test
  // });

  fit('Test_should_create_service', () => {
    expect(service).toBeTruthy();
  });

  fit('Test_should_retrieve_Students_from_the_backend', (done: DoneFn) => {
    service.getStudents().subscribe(
      (students: Student[]) => {
        console.log(students)
        expect(students.length).toBeGreaterThan(0); // Check if any teams are retrieved
        done();
      },
      (error: any) => {
        fail('Failed to retrieve teams: ' + JSON.stringify(error));
      }
    );
  });

  fit('Test_should_create_a_new_Student_via_the_backend', (done: DoneFn) => {
    const newStudent: Student = {
      name: 'demo',
      department: 'demo',
      phonenumber: "7894561230"
    };

    service.createStudent(newStudent).subscribe(
      (createdStudent: boolean) => {
        expect(createdStudent).toBe(true); // Check if the creation was successful
        done();
      },
      (error: any) => {
        fail('Failed to create student: ' + JSON.stringify(error));
      }
    );
  });

  fit('Test_should_retrieve_student_by_id_from_the_backend', (done: DoneFn) => {
    service.getStudentById(1).subscribe(
      (student: Student) => {
        console.log('Response:', student); // Log the received student data
        expect(student).toBeDefined(); // Check if student data is received
        done();
      },
      (error: any) => {
        console.error('Error:', error); // Log the error for debugging
        fail('Failed to retrieve student: ' + JSON.stringify(error));
      }
    );
  });




  // Write similar test cases for other methods (updateTeam, deleteTeam, getPlayers, createPlayer, updatePlayer, deletePlayer)

});
