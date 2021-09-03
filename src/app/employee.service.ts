import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    /* Retorna um Observable do tipo lista de Employee, que é uma
     * interface que representa o valor do back-end;
     * Se o retorno fosse genérico, poderia colocar any no lugar
     * da interface Employee.
     *
     * A mesma coisa serve para o http request, que nesse método
     * é GET e está dizendo que o tipo de retorno no corpo é uma
     * lista de Employee.
     */
    public findAllEmployess(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
    }

    public findEmployeeById(employeeId: number): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/find/${employeeId}`)
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee)
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee)
    }

    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`)
    }

}
