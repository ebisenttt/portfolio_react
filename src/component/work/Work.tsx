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
      {/* <div className='work-img'>
        {props.img}
      </div> */}
      <p className="work-title">{props.title}</p>
    </a>
  </div>
)

export default Work;