import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="welcome-message">
        <h2 className="fade-in">Welcome to our store for musical instruments!</h2>
        <p className="fade-in">
        Here you will find quality tools
        </p>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/d8/68/4a/d8684ac44bbe6cb2864843c283d2a827.jpg"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Immerse yourself in the exciting world of games with our new
            joystick. Unique design, comfortable ergonomics and high
            functionality make it the perfect choice for any gamer. Feel every
            movement, every vibration, and enjoy unparalleled control over the
            gameplay. "
          </p>
        </div>

        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/5a/05/74/5a05748a2f7cc2cedd4c3a359e5abec1.jpg "
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Open the door to the exciting world of gaming with our powerful
            gaming laptop. Combining high performance and advanced technology,
            it will bring you amazing gaming emotion.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/ee/16/3c/ee163c6b4b6fd642839ff4c9249d4d2b.jpg"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Introducing our amazing gaming PCs, designed specifically for true
            gamers. With powerful processors and advanced graphics capabilities,
            they let you enjoy high-definition games with amazing detail and
            smooth gameplay.
          </p>
        </div>
        <div className="image-container">
          <img
            src=" https://i.pinimg.com/564x/6c/d8/96/6cd8964c5dccf277fe55bc30efd6597b.jpg"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Discover amazing comfort and elegance from our gaming chairs!
            Designed with your comfort and gaming experience in mind, our chairs
            are the perfect companion for your gaming adventures.
          </p>
        </div>

        <div className="image-container">
          <img
            src="https://i.pinimg.com/736x/c6/56/9f/c6569ff31dfce43364d9891d90aa29af.jpg "
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Create new horizons in the world of games with our gaming mice!
            Specially designed for gamers of all levels, they will be your
            reliable and stylish companion for your gaming adventures.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/0d/5a/71/0d5a7156a31b7df3eed2f9ab72cf95d7.jpg "
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Immerse yourself in the exciting world of gaming with our gaming
            keyboards! Stylish design, cutting-edge technology and unsurpassed
            quality come together in this perfect companion for your gaming
            sessions.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/78/3c/42/783c424f3210ef2104d1c607d552102d.jpg "
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Immersive audio immersion in gaming is what our gaming headphones
            offer. Feel every note, every rustle and every shot to make your
            gaming sessions a real adventure.
          </p>
        </div>
      </div>
    </div>
  );
}