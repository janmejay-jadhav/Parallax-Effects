import React, { useEffect } from "react";
import NavBar from "../NavBar";
import "./Home.css";
import hill1 from "../assets/hill1.png";
import hill2 from "../assets/hill2.png";
import hill3 from "../assets/hill3.png";
import hill4 from "../assets/hill4.png";
import hill5 from "../assets/hill5.png";
import tree from "../assets/tree.png";
import leaf from "../assets/leaf.png";
import plant from "../assets/plant.png";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../Footer";
// import VideoBg from "../assets/VideoBg.mp4"

function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/");
    }

    let text = document.getElementById("text");
    let leaf1 = document.getElementById("leaf");
    let hill11 = document.getElementById("hill1");
    let hill44 = document.getElementById("hill4");
    let hill55 = document.getElementById("hill5");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      if (value <= 1330) {
        text.style.marginTop = value * -2.5 + "px";
        leaf1.style.top = value * -3.5 + "px";
        leaf1.style.left = value * 1.5 + "px";
        hill55.style.left = value * 1.5 + "px";
        hill44.style.left = value * -1.5 + "px";
        hill11.style.top = value * 1 + "px";
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <section className="parallax">
        <img src={hill1} alt="hill1" id="hill1" />
        <img src={hill2} alt="hill2" id="hill2" />
        <img src={hill3} alt="hill3" id="hill3" />
        <img src={hill4} alt="hill4" id="hill4" />
        <img src={hill5} alt="hill5" id="hill5" />
        <img src={tree} alt="tree" id="tree" />
        <h2 id="text" className="text">
          Welcome <br />
          Nature
        </h2>
        <img src={leaf} alt="leaf" id="leaf" />
        <img src={plant} alt="plant" id="plant" />
      </section>
      <section className="sec">
        <h2>Do You Love Nature !!!!!</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <div className="container">Save Mother Nature</div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
          minima officiis iste nam cumque sit asperiores, est vel, accusamus
          voluptatem eaque optio aliquam facere minus amet sint, alias
          odioLorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          ducimus minima officiis iste nam cumque sit asperiores, est vel,
          accusamus voluptatem eaque optio aliquam facere minus amet sint, alias
          odio.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Home;
