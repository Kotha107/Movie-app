import { Component, inject, Input, input, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonSkeletonText, IonAvatar, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent, IonCard, IonText, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,IonIcon } from '@ionic/angular/standalone';
import { Movie } from '../services/movie';
import { MovieResult } from '../model/interfaces';
import {cashOutline,calendarOutline,starOutline} from 'ionicons/icons';
import {addIcons} from 'ionicons';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonSkeletonText,
    IonAvatar,
    IonAlert,
    IonLabel,
    DatePipe,
    RouterModule,
    IonBadge,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    CurrencyPipe,
    IonCard,
    IonText,
    IonCardContent,
    IonIcon,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle
],
})
export class DetailsPage  {
  private movieService = inject(Movie);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult| null>=signal(null);
  
  @Input()
set id(movieId: string) {
    if (movieId) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      console.log(movie);
      this.movie.set(movie);
    });
  }
}

  constructor() { 
    addIcons({ cashOutline,calendarOutline})
  }

 

}



