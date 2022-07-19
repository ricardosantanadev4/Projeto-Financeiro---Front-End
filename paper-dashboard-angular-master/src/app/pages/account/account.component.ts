import { Component, OnInit } from '@angular/core';
import { Account } from 'app/models/Account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  // array onde vai ser armazenado as/a linha da tabela
  accounts: Account[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAccouts();
  }
  // gera a primeira linha da tabela e armazena no array accounts
  getAccouts() {
    let account: Account = {
      id: 1,
      name: 'BB',
      type: 'corrente',
      value: 1500,
    }
    let account1: Account = {
      id: 2,
      name: 'bb2',
      type: 'bradesco',
      value: 5000,
    }
    this.accounts.push(account);
    this.accounts.push(account1);
    console.log(this.accounts);
  }
}
