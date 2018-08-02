import { Component, OnInit } from '@angular/core';
import { RaveOptions } from 'angular-rave';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  success = false;
  rave: Partial<RaveOptions> = {};
  constructor() { }

  ngOnInit() {
    this.rave.PBFPubKey = 'FLWPUBK-f836a1f887a847ea500cbffcfee9ce45-X';
    this.rave.txref = `STAFF-MGT-${(Math.random() * 1000000).toFixed(0)}`;
  }

  paymentFailure() {
    console.log('Failed for some reasons');
  }

  paymentSuccess(res) {
    console.log('done', res);
    this.success = true;
  }

}
