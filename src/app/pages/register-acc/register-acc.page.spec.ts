import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterAccPage } from './register-acc.page';

describe('RegisterAcc', () => {
  let component: RegisterAccPage;
  let fixture: ComponentFixture<RegisterAccPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterAccPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterAccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
