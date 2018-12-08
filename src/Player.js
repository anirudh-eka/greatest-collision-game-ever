import React from 'react';

export default function(props) {
  const style = { transform: translate(props.second, props.slide)}
  const name = props.collided ? `${props.name}.` : props.name

  return <div style={style} className={`Player${props.second ? ' Player-Second' : ' Player-First'}`}>
            <h1>{name}</h1>
          </div>
}

const translate = (fromRight, distance) =>
                  `translate(${fromRight ? -distance : distance}vw)`
