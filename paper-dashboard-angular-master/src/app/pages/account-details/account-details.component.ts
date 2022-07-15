import { Component, OnInit } from '@angular/core';
import { Account } from 'app/models/Account';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  account: Account = {};
  id = 0;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.id=Number(this.route.snapshot.paramMap.get("id"))|0;
    if(this.id != 0){
      this.getAccounts()
    }
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.account)
  }
  getAccounts(){
    let account: Account = {
      id: 1,
      name:'AccountDetails',
      type:'popanca',
      value: 1500,
    }
    this.account = account;
  }
}
