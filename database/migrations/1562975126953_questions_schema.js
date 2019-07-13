'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionsSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('number',3)
      table.text('description')
      table.string('type',60)
      table.string('options',255)
      table.string('answer',255)
      table.integer('timer',3)
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionsSchema
