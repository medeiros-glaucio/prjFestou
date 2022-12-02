import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroListagemComponent } from './cadastro-listagem.component';

describe('CadastroListagemComponent', () => {
  let component: CadastroListagemComponent;
  let fixture: ComponentFixture<CadastroListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
