import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Carouse1 = ({carouselItems, title, styles}) => {

  return (
    <section>
      <header>
        {title}
      </header>
        <Carousel
          isLoop={true}
          hasIndexBoard={false}
          hasMediaButton={false}
          hasMediaButtonAtMax='bottomLeft'
          hasSizeButton={false}
          hasDotButtons='bottom'
          hasThumbnails={false}
          shouldSwipeOnMouse={false} // for selecting text
          shouldMinimizeOnSwipeDown={false} 
          style={{ userSelect: 'text', ...styles }}
        >
          {carouselItems.map(
            (item) => {
                return item
            }
          )}
        </Carousel>

    </section>
  );
};

export default Carouse1;