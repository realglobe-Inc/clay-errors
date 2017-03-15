'use strict'

const { NotFoundError } = require('clay-errors')

{
  const doThrow = () => {
    throw new NotFoundError({})
  }

  doThrow()
}
