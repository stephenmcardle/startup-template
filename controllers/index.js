const UserController = require('./UserController')
const PostController = require('./PostController')
const ListingController = require('./ListingController')

module.exports = {

	user: UserController,
	post: PostController,
	listing: ListingController

}