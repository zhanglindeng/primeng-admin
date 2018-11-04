import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userServide: UserService) {
  }

  profile: any;

  async ngOnInit() {
    this.profile = await this.userServide.getProfile();
  }

}
