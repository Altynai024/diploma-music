import './HomeTxt.css';

function HomeTxt(props) {
  return (
      <p className="Home_txt">{props.children}</p>
  );
}

export default HomeTxt;