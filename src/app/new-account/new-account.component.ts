import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {LoggingService} from "../logging.service";
import {AccountService} from "../account.service";


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService], // w ten sposób przekazujemy nową instancję klasy
})
export class NewAccountComponent implements OnInit, OnDestroy{
  subscription: Subscription

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService,
  ) {}

  ngOnInit() {
    const observable = this.accountService.statusUpdated
    this.subscription = observable.subscribe(status => {
      alert('New Status: ' + status);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus)

  }
}
