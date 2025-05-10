import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private apiUrl = 'https://catalogo-back-7w77.onrender.com/api/movie'; 

  constructor(private http: HttpClient) { }

  
  getMovies(): Observable<any> {
    return this.http.get(`${environment.apiUrl}`);
  }

  
  getMovieById(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${id}`);
  }

  agregar(movieData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}`, movieData);
  }

  editar(id: number, movieData: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/${id}`, movieData);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/${id}`);
  }
}
