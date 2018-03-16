import React from 'react'
import { Artboard, render } from 'react-sketchapp'

import { Node } from '../../components/Node'

export default (context) => {
  render((
    <Artboard>
      <Node />
    </Artboard>
  ), context.document.currentPage())
}
