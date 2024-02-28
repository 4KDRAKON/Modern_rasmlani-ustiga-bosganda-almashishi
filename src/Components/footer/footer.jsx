import IMG from "../img/footerstul.png"
import people from "../img/odamlar.svg"
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <img className="lol" src={IMG} alt="IMG" width={359} height={332} />


                    <div className="lex">
                        <h2 className="footer__title">Luxury & Fancy Chair</h2>
                        <p className="footer__text">All the Lorem Ipsum generators
                            on the Internet tend to predefined chunks  this the first true
                            generator on the Internet. </p>

                            <hr className="chiziq__fot" />
                    </div>


                    <div className="people">
                        <span className="foote__span">
                            <span className="nimalar">20K+</span>
                            People Visiting this year</span>


                        <span className="foote__span1"> <span className="nimalar2">15</span>Years Experience</span>




                        <div className="mayda">
                            <img src={people} alt="odamlar" />

                            <hr className="tayoq" />

                            <div className="slslsllldllkdlkdlkl">
                            <h3 className="oxir__text">Trust Members</h3>
                            <p className="oxirgi__text">More than 50k peoples integrate with us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export { Footer }