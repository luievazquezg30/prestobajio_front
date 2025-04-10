import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppointmentConfirmation } from './appointment-confirmation.page';

describe('AppointmentConfirmation', () => {
  let component: AppointmentConfirmation;
  let fixture: ComponentFixture<AppointmentConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentConfirmation],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentConfirmation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
