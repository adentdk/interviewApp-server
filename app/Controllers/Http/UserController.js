'use strict'

const User = use('App/Models/User')

class UserController {

	async store ({ request, response }) {
		try{
			
        	const userData = request.only(['name', 'email', 'phone_number'])

        	const create = await User.create(userData)

        	return response.send({
        	 	"messages" : "user has been created",
        	 	"data" : create
        	 })
		}catch(error){
			console.log(error)
			return response.status(400).send({
				"messages" : "User has not been created",
				"data" : {},
			})
		}
	}

}

module.exports = UserController
