import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'; //glimer es el motor de ember para componentes
import { action } from '@ember/object'; //importar libreria de acciones

export default class FeedComponent extends Component {
	@action 
	onDelete(id){
		this.args.onDelete(id);
	}
}
