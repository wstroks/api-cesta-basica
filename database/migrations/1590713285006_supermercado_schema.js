'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SupermercadoSchema extends Schema {
  up () {
    this.create('supermercados', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('supermercados')
  }
}

module.exports = SupermercadoSchema
