import React from 'react';
import { TOTAL_SCREENS } from '../utilities/commonUtils';

const PortfolioContainer: React.FC = () => {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) => (
      screen.component ? (
        <div key={screen.screen_name} id={screen.screen_name}>
          <screen.component screenName={screen.screen_name} id={screen.screen_name} />
        </div>
      ) : (
        <div key={screen.screen_name}></div>
      )
    ));
  };


  return (
    <div className='portfolio-container'>
      {mapAllScreens()}
    </div>

  );
}

export default PortfolioContainer;