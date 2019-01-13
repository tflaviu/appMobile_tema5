import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  likes: number;
  actualComment:string;
  comments: Array<Object>;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.likes = 0;
    this.actualComment = '';
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(comment) {
    let now = new Date();
    let time = now.getDate() + '.' + (now.getMonth() + 1) + '.' +  now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    this.comments.unshift(
      {
        text: comment,
        time: time,
      }
    );
    this.actualComment = '';
  }

  onInputChange(key) {
    if (key === 13) {
      if (!this.actualComment.trim().length) {
        this.presentAlert('Invalid Comment', 'Comments cannot be empty! Please type at least one letter.', 'OK');
        return;
      }
      this.addComment(this.actualComment);
    }
  }

  presentAlert(title, subtitle, buttonText) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: [buttonText],
    });
    alert.present();
  }
}
