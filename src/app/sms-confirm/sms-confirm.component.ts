import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-confirm',
  templateUrl: './sms-confirm.component.html',
  styleUrls: ['./sms-confirm.component.scss']
})
export class SmsConfirmComponent implements OnInit {
  public smsCode: number;
  public confirmError: boolean = false;
  public confirmSuccess: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public confirm(smsCode: number): void {
    this.confirmError = true;
    console.log('smsCode', smsCode);
  }

}
