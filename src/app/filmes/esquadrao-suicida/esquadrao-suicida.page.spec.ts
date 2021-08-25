import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsquadraoSuicidaPage } from './esquadrao-suicida.page';

describe('EsquadraoSuicidaPage', () => {
  let component: EsquadraoSuicidaPage;
  let fixture: ComponentFixture<EsquadraoSuicidaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquadraoSuicidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsquadraoSuicidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
