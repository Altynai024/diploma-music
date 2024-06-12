import CategoryList from '../../Components/CategoryList/CategoryList';
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">



            <div className="Kylie">
                <div className="Container">
                    <h1 className="Neon">Welcome to my world - a world of music without boundaries or limitations! Here, every note sounds like an invitation to new adventures and emotional experiences.</h1>

                    <div className="Home-about">
                        <p>
                            "Our music website is your personal ticket to  <br/>
                            a unique atmosphere of sounds that fills your days with <br />
                              joy and inspiration. Here, you'll find not only your <br />
                            favorites but also discover a multitude of new artists and genres."
                        </p>
                    </div>
                </div>
            </div>

            <aside>
                <div className="Container">
                    <CategoryList />
                </div>
            </aside>
            <div className="Kylie-lips">
                <div className="Container">
                    <p>
                        the best products <br /> only with us
                    </p>
                </div>
            </div>
            <div className="Row">
                <div className="Container">
                    <div className="Col-6">
                        <p>Immerse yourself in a world of musical impressions that will accompany you in every moment of life - from relaxing after a long day to vibrant moments at a party with friends.</p>
                    </div>
                    <div className="Col-6">
                        <p>Join us today and explore new dimensions of musical art. Welcome to my world - a world of music that awaits you with open arms!</p>
                    </div>
                </div>
            </div>
            <div className="Lip-liner">
                <div className="Row">
                </div>
            </div>

            <div className="Choose">
                Choose the best
            </div>
        </div>
    );
};