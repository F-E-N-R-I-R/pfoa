import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { SideBar } from './types';

@Injectable()
export class FileProvider {

    constructor(private http: HttpClient) {
    }

    public getFileSystem(): Observable<SideBar.File[]> {
        return this.http.get("./assets/map.json")
            .pipe(
                map((res: Observable<SideBar.File[]>) => res),
                catchError((error: any) => of(error)),
            );
    }
}
