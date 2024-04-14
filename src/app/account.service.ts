import { Injectable } from "@angular/core";
import {LoggingService} from "./logging.service";

export interface Account  {
  name: string;
  status: string;
}

@Injectable({
  providedIn: "root"
})
export class AccountService {
  accounts: Account[] = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string): void {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
