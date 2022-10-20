import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SalarioComponent } from './page/salario/salario.component';
import { LerStringComponent } from './page/ler-string/ler-string.component';
import { CaixaEletronicoComponent } from './page/caixa-eletronico/caixa-eletronico.component';
import { RelatorioDoDiaComponent } from './page/relatorio-do-dia/relatorio-do-dia.component';
import { SomarImpostoComponent } from './page/somar-imposto/somar-imposto.component';
import { MaisBaratoComponent } from './page/mais-barato/mais-barato.component';
import { AnoBissextoComponent } from './page/ano-bissexto/ano-bissexto.component';
import { ResultadoFinalComponent } from './page/resultado-final/resultado-final.component';
import { DataDeNascimentoComponent } from './page/data-de-nascimento/data-de-nascimento.component';
import { DicionarioComponent } from './page/dicionario/dicionario.component';
import { ValidacaoComponent } from './page/validacao/validacao.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { ValidacaoDeSenhaComponent } from './page/validacao-de-senha/validacao-de-senha.component';
import { EleicoesComponent } from './page/eleicoes/eleicoes.component';
import { AgendaComponent } from './page/agenda/agenda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LampadaComponent } from './page/lampada/lampada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalarioComponent,
    LerStringComponent,
    CaixaEletronicoComponent,
    RelatorioDoDiaComponent,
    SomarImpostoComponent,
    MaisBaratoComponent,
    AnoBissextoComponent,
    ResultadoFinalComponent,
    DataDeNascimentoComponent,
    DicionarioComponent,
    ValidacaoComponent,
    CadastroComponent,
    ValidacaoDeSenhaComponent,
    EleicoesComponent,
    AgendaComponent,
    LampadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
