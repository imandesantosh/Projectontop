import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  constructor(private http: HttpClient) {}
  getContracts() {
    const url = 'assets/data/contracts.json';
    return this.http.get(url);
  }
}
