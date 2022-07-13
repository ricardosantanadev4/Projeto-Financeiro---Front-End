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
  getAccouts(){
    let account: Account = {
      name:'caixa',
      type:'popanca',
      value: 1500,
    }
    this.accounts.push(account);
    console.log(this.accounts);
  }
}
