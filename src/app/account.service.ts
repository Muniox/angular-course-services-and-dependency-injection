import {EventEmitter, Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

export interface Account  {
  name: string;
  status: string;
}

@Injectable({
  providedIn: "root" // dzięki temu nie musimy podawać serwisu w ngModule w providers
  /**
   * The "new syntax" does offer one advantage though:
   * Services can be loaded lazily by Angular (behind the scenes)
   * and redundant code can be removed automatically.
   * This can lead to a better performance and loading speed -
   * though this really only kicks in for bigger services and apps in general.
   *
   * */
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

  statusUpdated = new EventEmitter<string>();

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
