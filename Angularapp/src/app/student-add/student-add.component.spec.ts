import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentAddComponent } from './student-add.component';
import { StudentService } from '../services/student.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('StudentAddComponent', () => {
  let component: StudentAddComponent;
  let fixture: ComponentFixture<StudentAddComponent>;
  let mockStudentService: jasmine.SpyObj<StudentService>;
  let mockRouter: Router;

  beforeEach(() => {
    mockStudentService = jasmine.createSpyObj('StudentService', ['createStudent']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [StudentAddComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: StudentService, useValue: mockStudentService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    fixture = TestBed.createComponent(StudentAddComponent);
    component = fixture.componentInstance;
  });

  fit('Test_should_create_Student_Add_Component', () => {
    expect(component).toBeTruthy();
  });

  fit('Test_should_call_createStudent_method_and_navigate_on_successful_form_submission', fakeAsync(() => {
    const mockStudent = {
      id: 1,
      name: 'Alice',
      department: 'Computer Science',
      phonenumber: '123-456-7890'
    };

    component.ngOnInit(); // Initialize the form
    fixture.detectChanges(); // Update the component

    component.addForm.setValue(mockStudent);

    mockStudentService.createStudent.and.returnValue(of(mockStudent));

    component.onSubmit();

    tick(); // Simulate passage of time

    expect(mockStudentService.createStudent).toHaveBeenCalledWith(mockStudent);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  }));
});
