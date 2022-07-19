import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'app/models/Account';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  getUpdate(id: number) {
    this.router.navigate(["account-details", { id: id }])
  }

  delete(id: number) {
    // se tiver algum objeto com o mesmo id passado como paramentro ele retorna o indice desse objeto
    let index = this.accountsFilho.findIndex(x => x.id === id);
    console.log(index);
    //  splice(index,1) remove o objeto do array que esta no indice passado em index
    this.accountsFilho.splice(index, 1);
    console.log(this.accountsFilho);
    this.toastr.success("Deletado Com Sucesso!");
  }
}
