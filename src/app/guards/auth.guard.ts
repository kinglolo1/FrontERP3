import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CategoryComponent } from '../component/category/category.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild,CanDeactivate<CategoryComponent>, CanLoad  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  canDeactivate(component: CategoryComponent): boolean {
    if (true) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return false;
  }



  canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }

}
