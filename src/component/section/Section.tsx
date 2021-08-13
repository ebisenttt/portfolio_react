import React from 'react';
import "./Section.scss";

type Props = {
  id: string,
  title: string,
  children?: React.ReactNode
  sidePadding?: string
}

const Section = (props: Props) => (
  <div id={props.id} className="section">
    <div className="section-title-container">
      <h2 className="section-title">{props.title}</h2>
    </div>
    <div className="section-content-container" style={{padding: `0 ${props.sidePadding}`}}>
      {props.children}
    </div>
  </div>
)

export default Section;