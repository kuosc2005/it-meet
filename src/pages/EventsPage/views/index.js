import './EventPage.sass';
import image from '../../../assets/p1character.png';
export default function EventPage() {
  return (
    <div className='EventPage'>
      <div className='main-info'>
        <div className='details'>
          <div className='event-title'>Idea Pitching</div>
          <div className='eventManager'>Pujan Jangam (98xxxxxxxxx)</div>
          <div className='line'></div>
          <div className='description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sed
            non nihil a enim est voluptate voluptates doloribus ipsa velit earum
            vitae minima amet dolor ex aut repudiandae, in quae quas quia
            tempora error iure hic! Fugiat dolor aliquam laudantium optio sunt
            perferendis voluptas! Voluptatem praesentium consequatur unde
            voluptas libero pariatur quaerat ex voluptate debitis voluptatibus
            saepe placeat vitae, iure enim modi adipisci omnis expedita ratione
            eaque velit repudiandae voluptatum. Corporis, quo atque, doloribus
            ab accusamus cum repudiandae assumenda numquam culpa dolores
            voluptates necessitatibus incidunt voluptatibus deleniti. Quo
            repellendus rem laudantium voluptates, iure nemo ipsam omnis sunt et
            asperiores nihil sed quos commodi molestias sapiente suscipit!
            Veniam ducimus cupiditate odit adipisci nobis voluptatibus
            consectetur error
          </div>
          <br />
          <div className='registration-info'>
            {`Registration Fee: Rs. ${123}`}
            <br />
            {`Application Deadline : ${'November 23,2023'}`}
          </div>
        </div>
        <div className='img-container'>
          <img src={image} alt='randomImage' className='background-image' />
          <div className='apply'>
            Apply Now
          </div>
        </div>
      </div>
      <div className='more-info'>
        <div className='location'></div>
        <div className='prize'></div>
      </div>
    </div>
  );
}
