import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './page/agenda/agenda.component';
import { AnoBissextoComponent } from './page/ano-bissexto/ano-bissexto.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { CaixaEletronicoComponent } from './page/caixa-eletronico/caixa-eletronico.component';
import { DataDeNascimentoComponent } from './page/data-de-nascimento/data-de-nascimento.component';
import { DicionarioComponent } from './page/dicionario/dicionario.component';
import { EleicoesComponent } from './page/eleicoes/eleicoes.component';
import { LampadaComponent } from './page/lampada/lampada.component';
import { LerStringComponent } from './page/ler-string/ler-string.component';
import { MaisBaratoComponent } from './page/mais-barato/mais-barato.component';
import { RelatorioDoDiaComponent } from './page/relatorio-do-dia/relatorio-do-dia.component';
import { ResultadoFinalComponent } from './page/resultado-final/resultado-final.component';
import { SalarioComponent } from './page/salario/salario.component';
import { SomarImpostoComponent } from './page/somar-imposto/somar-imposto.component';
import { ValidacaoDeSenhaComponent } from './page/validacao-de-senha/validacao-de-senha.component';
import { ValidacaoComponent } from './page/validacao/validacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'ano-bissexto', component: AnoBissextoComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'caixa-eletronico', component: CaixaEletronicoComponent},
  { path: 'data-de-nascimento', component: DataDeNascimentoComponent},
  { path: 'dicionario', component: DicionarioComponent},
  { path: 'eleicoes', component: EleicoesComponent},
  { path: 'ler-string', component: LerStringComponent},
  { path: 'mais-barato', component: MaisBaratoComponent},
  { path: 'relatorio-do-dia', component: RelatorioDoDiaComponent},
  { path: 'resultado-final', component: ResultadoFinalComponent},
  { path: 'salario', component: SalarioComponent},
  { path: 'somar-imposto', component: SomarImpostoComponent},
  { path: 'validacao', component: ValidacaoComponent},
  { path: 'validacao-de-senha', component: ValidacaoDeSenhaComponent},
  { path: 'lampada', component: LampadaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
