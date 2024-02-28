import Facebook from "../img/facebook.svg"
import Instagram from "../img/instagram.svg"
import Twitter from "../img/twitter.svg"

import Stul1 from "../img/sariqstol.png"
import Stul2 from "../img/qorastol.png"
import Stul3 from "../img/uchinchistul.png"
import Logo from "../img/KORSATGICH.svg"
import React from "react"


const Images = [
    {
        id:1,
        image:Stul1,
        text: "Comfort Lounge Chair"
    },
    {
        id:2,
        image:Stul2,
        text: "Comfort Launge Chairs"
    },
    {
        id:3,
        image:Stul3,
        text: "Comfort Launge Chairs"
    },
    // {
    //     id:4,
    //     image:Logo,
        
    // },
]
function Section() {
    const Ref = React.useRef()

    const remove = ()=>{
        Ref.current.classList.remove("modal2")
    }
    const [currentImage, setCurrentImage] = React.useState(Stul2);
    const handleImageChange = (Images) => {
        setCurrentImage(Images);
      };
    return (

        <>
            <section className="section" >
                <div className="container">
                    <dir className="div__sozlar">
                        <h3 className="qual">100% Quality Guranty</h3>
                        <h1 className="find">Find Classy Furnitures For Your Comfort</h1>
                        <p className="section__text">All the Lorem Ipsum generators on the 
                        Internet tend to predefined chunks  this the first true generator on
                         the Internet. </p>
                        <div className="Alohida__div">
                            <h4 className="start">Start From</h4>
                            <h2 className="narx">102.99 USD</h2>
                            <button className="section__btn"  
                            onClick={()=>{
                                Ref.current.classList.add("modal2")
                            }}
                            
                            >Buy Now</button>

                            <div className="modal" ref={Ref}  >
                                <div className="container" >
                                    <div className="modall">
                                        
                                        <h2 className="salomlar">sotib olindi✅</h2>
                                        <button onClick={remove}>X</button>
                                    </div>
                                </div>
                            </div>




                                <ul className="ijtimoiy">
                                    <li className="ijtim__item">
                                        <a href="#link">
                                            <img src={Facebook} alt="" />
                                        </a>
                                    </li>
                                    <li className="ijtim__item">
                                        <a href="#link">
                                            <img src={Instagram} alt="" />
                                        </a>
                                    </li>
                                    <li className="ijtim__item">
                                        <a href="#link">
                                            <img src={Twitter} alt="" />
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </dir>

                    <div className="div__ikki">
						<img className='dimg2' src={currentImage} alt="img"  width={586} height={600}/>
					</div>


                    <div className="Asosiylar">
                    {Images.map((item) => (
					<li key={item.id} className="rasm">
						<button
						className='div_btn'
						onClick={() => handleImageChange(item.image)}
						>
						<img className='div_img' src={item.image} alt="img" width={81} height={81} />
						</button>
						<p className="rasm_text">{item.text}</p>
					</li>
					))}

                    <ul className="spans">
                        <li  className="span">
                            <span className="text">Popular shades</span>
                        </li>
                        <li className="span2">
                            <span className="text"></span>
                        </li>
                        <li className="span3">
                            <span className="text"></span>
                        </li>
                        <li className="span4">
                            <span className="text"></span>
                        </li>
                        <li className="span5">
                            <span className="text"></span>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
export { Section };