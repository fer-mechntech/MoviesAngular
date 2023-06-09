import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  
  showProgress: BehaviorSubject<boolean> = this._loaderService.isLoading;

  constructor(private _loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
