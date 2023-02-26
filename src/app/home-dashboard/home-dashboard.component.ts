import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {
  // movies: Movie[] = this.movieService.getMovies();

  constructor(private router: Router,
    private angularFireAuth: AngularFireAuth
    ) { }

  ngOnInit(): void {
  }

  addFavourite(){
    console.log('in add fav');
    // this.userService.addFavourite(movie);
    // this.router.navigate(['/user/favourite']);
  }

  addWatchLater(){
    console.log('in Add Watch Later');
    // this.angularFireAuth.authState.subscribe(user => {
    //   if (user){
    //     console.log('adding to Watch Later', movie.id, user.email);
    //   } else {
    //     console.log('PLEASE LOGIN - NOT adding to Watch Later', movie.id);
    //     this.router.navigate(['/user'])
    //   }
    // })
  }

  addWatched(){
    console.log('in Add Watched');
    // this.angularFireAuth.authState.subscribe(user => {
    //   if (user){
    //     console.log('adding to Watched', movie.id, user.email);
    //   } else {
    //     console.log('PLEASE LOGIN - NOT adding to Watched', movie.id);
    //     this.router.navigate(['/user'])
    //   }
    // })
  }
}
