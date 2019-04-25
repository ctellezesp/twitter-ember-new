import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppIndexController extends Controller {
	@action 
	onSubmit(text){
		let user = this.store.peekRecord('user', 1);
		let post = this.store.createRecord('tweet', {
		  description: text
		});
		post.set('user', user);
		post.save();
	}

	@action
	onDelete(id){
		let del = this.store.findRecord('tweet', id).then(function(del) {
  		del.destroyRecord();
		});
	}
}
