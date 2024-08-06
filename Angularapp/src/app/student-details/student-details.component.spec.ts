import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailsComponent } from './student-details.component';
import { StudentService } from '../services/student.service';
import { of } from 'rxjs';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;
  let mockActivatedRoute: any;
  let mockStudentService: jasmine.SpyObj<StudentService>;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1') // Mocking student ID
        }
      }
    };

    mockStudentService = jasmine.createSpyObj('StudentService', ['getStudentById']);

    TestBed.configureTestingModule({
      declarations: [StudentDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: StudentService, useValue: mockStudentService }
      ]
    });

    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
  });

  fit('Test_should_create_Student_Details_Component', () => {
    expect(component).toBeTruthy();
  });
});
