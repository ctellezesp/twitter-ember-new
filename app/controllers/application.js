import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class ApplicationController extends Controller {
	@action 
	onSubmit(text, userName, avatar){
		let post = this.store.createRecord('tweet', {
		  description: text,
		  avatar: avatar,
		  userName: userName
		});
		post.save();
	}
}
