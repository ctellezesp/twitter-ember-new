import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import{action} from '@ember/object';

export default class ApplicationController extends Controller {
	@action 
	onSubmit(text){
		let tweetsCopy = this.tweets.slice();

		this.tweets = tweetsCopy.concat({
			id: Math.floor(Math.random() * 100) + 3,
			user_name: 'Carlos',
			description: text,
			created_at: '2019-04-11'
		});
	}
}
