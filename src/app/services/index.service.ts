import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private apiUrl = 'https://catalogo-back-7w77.onrender.com/api/movie'; 

  constructor(private http: HttpClient) { }

  
  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  
  getMovieById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  agregar(movieData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, movieData);
  }

  editar(id: number, movieData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, movieData);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
