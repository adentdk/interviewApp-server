'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswersSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('question_id',10).unsigned().references('id').inTable('questions')
      table.integer('user_id',10).unsigned().references('id').inTable('users')
      table.text('answer')
      table.string('attachment',255)
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswersSchema
