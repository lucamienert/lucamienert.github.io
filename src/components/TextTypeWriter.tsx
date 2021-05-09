import React from 'react'
import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'
import 'fontsource-roboto'

interface Props {
  words: string[]
}

const TextTypeWriter: React.FC<Props> = ({ words }) => {
  return (
    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal'}}>
      {' '}
      <span style={{ color: '#3f51b5', fontWeight: 'bold'}}>
        <Typewriter
          loop
          cursor
          cursorStyle='_'
          typeSpeed={170}
          deleteSpeed={150}
          delaySpeed={1000}
          words={words}
        />
      </span>
    </h1>
  );
}

export default TextTypeWriter
