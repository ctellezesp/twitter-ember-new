import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking'; //glimer es el motor de ember para componentes
import {action} from '@ember/object'; //importar libreria de acciones

export default class TwitterBoxComponent extends Component {
	@tracked text;
	@tracked error;

	@action handleChange(text){
		this.text = text;
		this.error = error;
	}

	@action 
	async handleSubmit(){
		let text = this.text;
		let req = await this.args.onSubmit(text);
		this.error = req.error;
		this.text = '';
	}

}
