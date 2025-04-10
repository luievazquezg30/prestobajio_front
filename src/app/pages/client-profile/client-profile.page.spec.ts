import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientProfilePage } from './client-profile.page';

describe('ClientProfile', () => {
  let component: ClientProfilePage;
  let fixture: ComponentFixture<ClientProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientProfilePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
