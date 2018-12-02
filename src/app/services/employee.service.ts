import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor(private http: HttpClient) { }

	baseUrl: string = 'http://localhost:3000/employee';

	getUsers() {
		return this.http.get<Employee[]>(this.baseUrl);
	}
}
