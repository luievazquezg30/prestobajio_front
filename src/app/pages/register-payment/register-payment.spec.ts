import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPayment } from './register-payment.page';

describe('RegisterPayment', () => {
  let component: RegisterPayment;
  let fixture: ComponentFixture<RegisterPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPayment],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
