import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
//import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
 // { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
