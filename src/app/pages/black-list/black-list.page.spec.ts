import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlackList } from './black-list.page';

describe('BlackList', () => {
  let component: BlackList;
  let fixture: ComponentFixture<BlackList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlackList],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlackList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
