import React from 'react'
import { StyleSheet, Touchable } from 'react-primitives'
import { Svg, Rect, Circle, Path, Text } from 'react-primitives-svg/lib/core.web'

export class Node extends React.Component {
  render () {
    return (
      <Touchable style={styles.touchable}>
        <Svg
          width={this.props.width || 96}
          height={this.props.height || 120}>
          <Rect
            x={8}
            y={8}
            rx={5}
            width={(this.props.width || 96) - 16}
            height={(this.props.width || 96) - 16}
            style={styles.node}
            strokeWidth={2} />
          <Circle
            r={6}
            cx={8}
            cy={(this.props.width || 96) / 2}
            style={styles.input}
            strokeWidth={2} />
          <Path
            d={'M' + ((this.props.width || 96) / 2) + ',2 l6,6 l-6,6 l-6,-6 l6,-6 Z'}
            style={styles.input}
            strokeWidth={2} />
          <Circle
            r={6}
            cx={(this.props.width || 96) - 8}
            cy={(this.props.width || 96) / 2}
            style={styles.output}
            strokeWidth={2} />
          <Path
            d={'M' + ((this.props.width || 96) / 2) + ',' + ((this.props.width || 96) - 14) + 'l6,6 l-6,6 l-6,-6 l6,-6 Z'}
            style={styles.output}
            strokeWidth={2} />
          <Text
            x={(this.props.width || 96) / 2}
            y={(this.props.height || 120)}
            style={styles.label}
            textAnchor='middle'>
            Node
          </Text>
        </Svg>
      </Touchable>
    )
  }
}

const styles = {
  node: {
    fill: '#fff',
    stroke: '#666'
  },
  icon: {
    fill: '#fff',
    stroke: '#999'
  },
  input: {
    fill: '#000',
    stroke: '#000'
  },
  output: {
    fill: '#fff',
    stroke: '#000'
  },
  label: {
    fill: '#000',
    fontFamily: 'Maison Mono',
    fontSize: 17,
    fontWeight: 'normal'
  },
  touchable: {
    cursor: 'pointer'
  }
}

export default Node
