import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking'; //glimer es el motor de ember para componentes
import {action} from '@ember/object'; //importar libreria de acciones

export default class TwitterBoxComponent extends Component {
	@tracked text;

	@action handleChange(text){
		this.text = text;
	}

	@action handleSubmit(){
		let newText = this.text;
		if(this.args.onSubmit)
			this.args.onSubmit(newText);
		else alert('handleSubmit');
	}

}
