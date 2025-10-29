import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Shop } from './pages/shop/shop';
import { Contact } from './pages/contact/contact';
import { Cart } from './pages/cart/cart';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'shop', component: Shop },
  { path: 'blog', component: Blog },
  { path: 'contact', component: Contact },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: '' }
];
