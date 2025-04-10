import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import {  Closure } from './closure.page';

describe('Closure', () => {
  let component: Closure;
  let fixture: ComponentFixture<Closure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Closure],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Closure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
