import { Component , NgModule, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TextDirectionController } from './shared/TextDirectionController';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP Web App';

  public directionController = new TextDirectionController();

  constructor(private authService: AuthService, private router : Router, private renderer: Renderer2) 
  {
    
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
