import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'app/models/Account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  @Input()
  // o component filho chama o component pai
  // recebe os elmentos do array do pai e sava accountsFilho
  accountsFilho: Account[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getUpdate(id: number){
    this.router.navigate(["account-details",{id: id}])
  }
}
