import React from 'react';
import ReactTooltip from 'react-tooltip';

type Props = {
  title: string,
  img: string,
  src: string,
  description: string,
}

const Work = (props: Props) => {
  const width = 320, height = 180;

  return (
    <div className="work" data-tip={props.description}>
      <a href={props.src}>
        <img className="work-img" src={props.img} alt={props.title} width={width} height={height}/>
        <p className="work-title">{props.title}</p>
      </a>
      <ReactTooltip />
    </div>
  )
}

export default Work;