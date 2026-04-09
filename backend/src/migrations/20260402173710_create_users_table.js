export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name', 100).notNullable()
    table.string('email', 150).notNullable().unique()
    table.string('password', 255).notNullable()
    table.enu('role', ['user', 'admin']).notNullable().defaultTo('user')
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('users')
}