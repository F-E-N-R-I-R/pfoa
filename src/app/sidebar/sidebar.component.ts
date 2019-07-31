import { Component, OnInit } from '@angular/core';
import { FileProvider } from './file.provider';
import { Observable } from 'rxjs';
import { SideBar } from './types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  public tabs$: Observable<SideBar.File[]> = this.fileProvider.getFileSystem();

  constructor( private fileProvider: FileProvider ) {
    // this.tabs$ = this.fileProvider.getFileSystem();
  }

  ngOnInit() {
    // this.tabs$.subscribe((res) => {console.log(res)})
  }

}
