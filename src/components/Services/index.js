import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='community'>
      <ServicesH1>The Future Is Here</ServicesH1>
      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Democratize Utility NFTs</ServicesH2>
          <ServicesP>NFTs are the lines of code, Slack message, the newsletter you sent to subscribers etc</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Create Collaboration Economy Flywheel</ServicesH2>
          <ServicesP>Creating a reinforcing flywheel effect for the collaboration economy.</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Empower Financial Independence</ServicesH2>
          <ServicesP>The creators will have their own social money, and be financially independent monetizing their work. .</ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
