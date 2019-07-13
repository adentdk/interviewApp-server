'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {

  async store ({ request, response }) {
    try{
      const answerData = request.all(['question_id','user_id','answer','attachment'])

      const create = await Answer.create(answerData)

      return response.send({messages : "complete", data : create})

    }catch(error){

      console.log(error)
      return response.status(400).send({
        "messages" : "answer has not been send",
        "data" : {}
      })

    }
  }
}

module.exports = AnswerController
