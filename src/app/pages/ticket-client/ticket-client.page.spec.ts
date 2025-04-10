import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TicketClientPage } from './ticket-client.page';

describe('TicketClient', () => {
  let component: TicketClientPage;
  let fixture: ComponentFixture<TicketClientPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketClientPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
