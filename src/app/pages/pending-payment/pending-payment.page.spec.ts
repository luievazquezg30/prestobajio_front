import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingPaymentPage } from './pending-payment.page';

describe('PendingPayment', () => {
  let component: PendingPaymentPage;
  let fixture: ComponentFixture<PendingPaymentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingPaymentPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
