import React from 'react';
import Banner from './Banner';
import Card from './Card/Card';

import imgOne from './img/img-1.webp';
import imgTwo from './img/img-2.webp';
import imgThree from './img/img-3.webp';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          source={imgOne}
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          source={imgTwo}
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          source={imgThree}
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          source="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          source="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          source="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
