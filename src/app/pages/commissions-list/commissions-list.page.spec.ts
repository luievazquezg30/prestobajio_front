import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommissionsList } from './commissions-list.page';

describe('CommissionsList', () => {
  let component: CommissionsList;
  let fixture: ComponentFixture<CommissionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommissionsList],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommissionsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
