import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'; //glimer es el motor de ember para componentes
import { action } from '@ember/object'; //importar libreria de acciones

export default class TwitterBoxComponent extends Component {
	@tracked text;
	@tracked error;
	@tracked img = "https://avatars0.githubusercontent.com/u/26472750?s=460&v=4";
	@tracked user = 'ctellezesp';

	@action handleChange(text){
		this.text = text;
		if(this.error)
			this.error = error;
	}

	@action 
	async handleSubmit(){
		let text = this.text;
		let userName = this.user;
		let avatar = this.img;
		await this.args.handleSubmit(text, userName, avatar);
		this.text = '';
	}

}
