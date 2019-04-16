import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class ApplicationController extends Controller {
	@action 
	onSubmit(text, userName, avatar){
		let post = this.store.createRecord('draft_tweet', {
		  description: text,
		  avatar: avatar,
		  userName: userName
		});
		post.save();
	}

	@action
	onDelete(id){
		let del = this.store.findRecord('draft_tweet', id).then(function(del) {
  		del.destroyRecord();
		});
	}
}
