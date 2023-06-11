import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Cards";
import Hero from "./Hero";
import { useRef} from "react";

function Home() {
  // const accounts = [
  //   {
  //     url: "https://github.com/Arwaaa9",
  //     label: "Github Account",
  //     type: "gray",
  //     icon: <FaGithub />,
  //   },
  //   {
  //     url: "https://www.linkedin.com/in/arwa-aiharbi%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-931a44253/",
  //     label: "LinkedIn Account",
  //     type: "linkedin",
  //     icon: <FaLinkedin />,
  //   },
  // ];
    const cardProps = [
      {
        title: "lipstic hellokitty",
        price: " 60 SR",
          Image:
         "https://i.pinimg.com/474x/86/fc/16/86fc16bf90b54043d1f271987ec0be6e.jpg"
       
      },
      {
        title:" maskra hellokitty",
        price: "100 SR",
        Image:
          "https://i.pinimg.com/564x/69/7a/34/697a3497a9a04af8433bfe3fcee3f0ee.jpg",
      },
      {
        title: "decor hellokitty  ",
        price: "300 SR",
        Image:" https://i.pinimg.com/564x/f2/60/d9/f260d99472587b9bc83c1310aef7acbd.jpg "   
      },
      {
    
        title: " Kuromi shoes ",
        price: "350 SR",
      Image:"  https://i.pinimg.com/564x/c5/b7/dc/c5b7dc69559b9f1f368bcfdff5e0b729.jpg"    
        },
      {
      
        title: " Kuromi shirt",
        price: "400 SR",
        Image:"https://i.pinimg.com/564x/26/5c/d7/265cd78e8f862c215b87a1dd8489573d.jpg"     },
      {
        title: "Hellokitty shoes",
        price: "500 SR",
        Image:" https://i.pinimg.com/564x/a2/96/dc/a296dce0cf26c057639bcb8880b34f70.jpg  "      },
    ];
    const ref = useRef(null);
  return (
    <>
      <Navbar />
      <Hero ref={ref} />
      <Card cardProps={cardProps}  ref={ref} />
      <Footer />
    </>
  );
}

export default Home;
