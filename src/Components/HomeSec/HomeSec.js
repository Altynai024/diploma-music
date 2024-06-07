import './HomeSec.css';

function HomeSec(props) {
  return (
      <h2 className="Home_tit">{props.children}</h2>
  );
}

export default HomeSec;