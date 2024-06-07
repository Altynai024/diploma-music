import eyes from "../../img/estetic1.jpg"
import "./Contacts.css"

export default function Contacts() {
    return (
        <div className="Container">
            <div className="Contacts">
                <h1>How can you contact us???</h1>
                <div className="Row">
                    <div className="Col-3">
                        Our contacts: <br />
                        <a className="Tel" target="_blank" rel="noreferrer" href="tel:+996 771 391 531">+996 771 391 531</a> <br />
                    </div>
                    <div className="Col-6">
                        <img className="Eyes" src={eyes} alt="photo-eyes" />
                    </div>
                    <div className="Col-3">
                        Our contacts: <br />
                        <a className="Tel" target="_blank" rel="noreferrer" href="tel:+996 771 391 531">+996 771 391 531</a> <br />
                    </div>
                </div>
                <p><strong> Our adress : </strong>  <a className="Adress" target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=48.858152, 2.294433
">101 Cosmetics street, 5th house</a></p>

                <p><strong>Our email: </strong><a className="Email" target="_blank" rel="noreferrer" href="mailto:altyn024@gmail.com">
                    altyn024@gmail.com</a></p>

                <p>we work from  <strong> 8 a.m </strong>to <strong>10 p.m</strong> </p>
            </div>
        </div>

    )
}