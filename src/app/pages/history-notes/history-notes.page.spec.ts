import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryNotesPage } from './history-notes.page';

describe('HistoryNotesPage', () => {
  let component: HistoryNotesPage;
  let fixture: ComponentFixture<HistoryNotesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryNotesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
