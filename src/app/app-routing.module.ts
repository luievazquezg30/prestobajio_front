import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-note',
    loadChildren: () => import('./pages/add-note/add-note.module').then( m => m.AddNotePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'history-notes',
    loadChildren: () => import('./pages/history-notes/history-notes.module').then( m => m.HistoryNotesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register-acc',
    loadChildren: () => import('./pages/register-acc/register-acc.module').then( m => m.RegisterAccPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'comissions',
    loadChildren: () => import('./pages/commissions/commissions.module').then( m => m.CommissionsPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'generated-sale',
    loadChildren: () => import('./pages/generated-sale/generated-sale.module').then( m => m.GeneratedSaleModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pending-payment',
    loadChildren: () => import('./pages/pending-payment/pending-payment.module').then( m => m.PendingPaymentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket-client',
    loadChildren: () => import('./pages/ticket-client/ticket-client.module').then( m => m.TicketClientPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'client-profile',
    loadChildren: () => import('./pages/client-profile/client-profile.module').then( m => m.ClientProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'client-list',
    loadChildren: () => import('./pages/client-list/client-list.module').then( m => m.ClientListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cobranza',
    loadChildren: () => import('./pages/cobranza/cobranza.module').then( m => m.CobranzaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register-payment',
    loadChildren: () => import('./pages/register-payment/register-payment.module').then( m => m.RegisterPaymentModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register-acc',
    loadChildren: () => import('./pages/register-acc/register-acc.module').then( m => m.RegisterAccPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'commissions-list',
    loadChildren: () => import('./pages/commissions-list/commissions-list.module').then( m => m.CommissionsListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'closure',
    loadChildren: () => import('./pages/closure/closure.module').then( m => m.ClosureModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'appointment-confirmation',
    loadChildren: () => import('./pages/appointment-confirmation/appointment-confirmation.module').then( m => m.AppointmentConfirmationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'defaulters-clients',
    loadChildren: () => import('./pages/defaulters-clients/defaulters-clients.module').then( m => m.DefaultersClientsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'black-list',
    loadChildren: () => import('./pages/black-list/black-list.module').then( m => m.BlackListModule),
    canActivate: [AuthGuard]
  },
  
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
