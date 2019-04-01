import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';

export default class ApplicationController extends Controller {
	@tracked tweets = [
		{
			id: 1, 
			username: 'Carlos',
			description: 'Hola'
		},
		{
			id: 2, 
			username: 'Carlos',
			description: 'Bienvenidos'
		},
		{
			id: 3, 
			username: 'Carlos',
			description: 'Ember'
		}
	];
}
