import React from "react";
import {
  aboutExperience,
  experiences
} from '../assets/data.json';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function Experience() {
  return (
    <div id="experience" class="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
      <div className="d-inline align-self-center">
        <h1 className="display-4 mb-5 text-center title-a">{aboutExperience}
                <div className="line-mf"></div>
              </h1>
          <div class="row">
            <Timeline animate={true} lineColor={'#ddd'}>
              {experiences.map(experience => (
                <TimelineItem
                  key={experience.id}
                  dateText={experience.date}
                  dateInnerStyle={{
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 'unset',
                    textIndent: 'unset'
                  }}
                  style={{ color: '#e86971' }}>
                  <h3>{experience.title},</h3>
                  <h3>{experience.company}</h3>
                  <ul style={{ paddingTop: '9px'}}>
                    {experience.details.map(detail => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;