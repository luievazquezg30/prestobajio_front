import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneratedSale } from './generated-sale.page';

describe('GeneratedSale', () => {
  let component: GeneratedSale;
  let fixture: ComponentFixture<GeneratedSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratedSale],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratedSale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
