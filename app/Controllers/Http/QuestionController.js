'use strict'

const Question = use('App/Models/Question')

class QuestionController {
  async index ({ request, response, view }) {

    try{
      const {number} = request.only(['number'])
      const question = await Question.findBy('number',number)
      const numbersArray = await Question.query().count()

      let question_count = numbersArray[0]['count(*)']


      return response.send({
        "messages" : "questions has been loaded",
        "question_count" : question_count,
        "data" : question
      })

    }catch(error){

      console.log(error)
      return response.status(400).send({
        "messages" : "questions has not been loaded",
        "data" : {}
      })

    }

  }

  async show ({request,response}) {

    try{

      const question_count = await Question.query().count()

      return response.send({
        "messages" : "question_count has been loaded",
        "question_count" : question_count[0]['count(*)'],
      })

    }catch(error){

      console.log(error)
      return response.status(400).send({
        "messages" : "question_count has not been loaded",
        "data" : {}
      })

    }    
  }
}

module.exports = QuestionController
