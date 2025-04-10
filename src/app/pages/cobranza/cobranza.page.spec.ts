import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CobranzaPage } from './cobranza.page';

describe('cobranza', () => {
  let component: CobranzaPage;
  let fixture: ComponentFixture<CobranzaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobranzaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CobranzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
