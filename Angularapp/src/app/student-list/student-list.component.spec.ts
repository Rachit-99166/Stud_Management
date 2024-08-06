import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StudentListComponent } from './student-list.component';
import { StudentService } from '../services/student.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Student } from 'src/models/student.model';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;
  let mockStudentService: jasmine.SpyObj<StudentService>;

  beforeEach(() => {
    mockStudentService = jasmine.createSpyObj('StudentService', ['getStudents']);

    TestBed.configureTestingModule({
      declarations: [StudentListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: StudentService, useValue: mockStudentService }]
    });

    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
  });

  fit('Test_should_create_Student_List_Component', () => {
    expect(component).toBeTruthy();
  });

  fit('Test_should_fetch_students_on_initialization_on_Student_List_Component', () => {
    const mockStudents: Student[] = [
      { id: 1, name: 'Alice', department: '101', phonenumber: '123-456-7890' },
      { id: 2, name: 'Bob', department: '102', phonenumber: '987-654-3210' }
    ];
    mockStudentService.getStudents.and.returnValue(of(mockStudents));

    fixture.detectChanges(); // Trigger component initialization

    expect(component.students).toEqual(mockStudents);
  });
});
