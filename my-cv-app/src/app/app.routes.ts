import { Routes } from '@angular/router';
import { Cv } from './cv/cv';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: 'cv',
    component: Cv,
    title: 'Curriculum Vitae Saya'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Kontak Saya'
  },
  {
    path: '',
    redirectTo: '/cv',
    pathMatch: 'full'
  }
];
