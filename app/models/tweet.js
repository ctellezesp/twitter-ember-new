import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class TweetModel extends Model {
	@attr('string') description;
	@belongsTo('user') user;
	//@attr('string') avatar;
	//@attr('string') userName;
}
