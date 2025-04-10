import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefaultersClients } from './defaulters-clients.page';

describe('DefaultersClients', () => {
  let component: DefaultersClients;
  let fixture: ComponentFixture<DefaultersClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultersClients],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultersClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
