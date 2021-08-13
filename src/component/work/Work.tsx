import React from 'react';

type Props = {
  title: string,
  img: string,
  src: string
}

const Work = (props: Props) => (
  <div className="work">
    <a href={props.src}>
      <img className="work-img" src={props.img} />
      <h3 className="work-title">{props.title}</h3>
    </a>
  </div>
)

export default Work;