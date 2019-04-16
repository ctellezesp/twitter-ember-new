import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'; //glimer es el motor de ember para componentes
import { action } from '@ember/object'; //importar libreria de acciones

export default class TweetComponent extends Component {

	@action 
	deleteTweet(id){
		let x = this.args.onDelete(id);
	}
}
