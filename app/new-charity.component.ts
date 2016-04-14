import { Component, EventEmitter } from 'angular2/core';
import { Charity } from './charity.model';

@Component({
  selector: 'new-charity',
  outputs: ['onSubmitNewCharity'],
  template:`
    <p>Add New Charity</p>
    <input placeholder="Name" #newName>
    <input placeholder="Mission Statement" #newMission>
    <input placeholder="Image" #newImage>
    <input placeholder="Contact Email or Phone" #newContact>
    <input placeholder="Fundraising Goal" #newGoal>
    <select #newCategory>
      <option value="Youth Development">Youth Development</option>
      <option value="Animals">Animals</option>
      <option value="Community">Community</option>
      <option value="Enviornment">Environment</option>
    </select>
    <input placeholder="Desired photo hashtags" #newHashtag>
    <button class="newCharityListSlide" (click)="addCharity(newName, newMission, newImage, newContact, newGoal, newCategory, newHashtag)">Add</button>
  `
})

export class NewCharityComponent {
  public onSubmitNewCharity: EventEmitter<any>;
  constructor() {
    this.onSubmitNewCharity = new EventEmitter();
  }
  addCharity(userName: HTMLInputElement, userMission: HTMLInputElement, userImage: HTMLInputElement, userContact: HTMLInputElement, userGoal: HTMLInputElement, userCategory: HTMLInputElement, userHashtag: HTMLInputElement) {
    var charityArray: Array<any> = [userName.value, userMission.value, userImage.value, userContact.value, userGoal.value, userCategory.value, userHashtag.value];
    this.onSubmitNewCharity.emit(charityArray);
    userName.value = "";
    userMission.value = "";
    userImage.value = "";
    userContact.value = "";
    userGoal.value = "";
    userCategory.value = "";
    userHashtag.value = "";
  }
}
