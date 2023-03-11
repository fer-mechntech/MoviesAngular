import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/interfaces/movie';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { LoaderService } from 'src/app/share/services/loader.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['title','year','cast','genres'];
  dataSource = new MatTableDataSource<Movie>();
  data = new Array<Movie>;
  //@ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
    //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private _moviesService: MoviesService, private _loaderService: LoaderService,) { }

  ngOnInit(): void {
    this.onGetMovies();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onGetMovies(): void{    
    this._loaderService.show();
    this._moviesService.getMovies().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Movie>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        setTimeout(() => {
          this._loaderService.hide();
        }, 500);  
      },
      error =>{
        console.log(error);
        this._loaderService.hide();
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      console.log(`Sorted ${sortState.direction}ending`);
    } else {
      console.log('Sorting cleared');
    }
  }
}
