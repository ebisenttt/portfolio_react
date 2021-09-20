import React from 'react';
import "./Section.scss";
import { useDeviceType } from 'context/MediaQuery';

type Props = {
  id: string,
  title: string,
  children?: React.ReactNode
}

const Section = (props: Props) => {
  const { isMobile } = useDeviceType();
  const className = isMobile ? 'section-for-mobile' : 'section-for-pc';
  return (
    <div id={props.id} className={`section ${className}`}>
      <div className="section-title-container">
        <h2 className="section-title">{props.title}</h2>
      </div>
      <div className="section-content-container">
        {props.children}
      </div>
    </div>
  )
}

export default Section;