
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home(){
    return(
        <div>
            <div>
            <Navbar/>
            </div>
            <div>
                <p style={{textAlign:"center"}}>Have a question?We can help.</p>
            </div>
            <div style={{marginBottom:"35px"}}>
                <figure>
                <img style={{width:"100%"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img0_v2.jpg" alt="" />
                <figcaption style={{position:"absolute",bottom:"4rem"}}>
                    <h1 style={{color:"white",fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",fontSize:"70px",paddingLeft:"300px",marginBottom:"40px"}}>Your summer</h1>
                    <h1 style={{fontFamily:"freight-big-pro,Times,serif",color:"tomato",paddingLeft:"350px",fontSize:"150px",fontWeight:"lighter",marginTop:"-80px"}}>dress code</h1>
                    <p style={{color:"white",fontSize:"18px",marginTop:"-80px",paddingLeft:"450px"}}>For the hottest day of the year...</p>
                </figcaption>
                </figure> 
            </div>
            <div style={{display:"grid",gridTemplateRows:"auto",gridTemplateColumns:"repeat(2,600px)",marginLeft:"130px"}} >
              <img style={{width:"650px",height:"650px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img1.jpg" alt=""/>  
              <img style={{width:"650px", height:"650px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img2.jpg" alt=""/>
              <img style={{width:"650px", height:"650px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img3_a.jpg" alt=""/>
              <img style={{width:"650px", height:"650px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul2/2022jul_0705_hp_w_img5.jpg" alt=""/>
              <img style={{width:"650px", height:"650px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img5.jpg" alt=""/>
              <img style={{width:"650px", height:"650px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img6.jpg" alt=""/>
            </div>
            <div style={{display:"flex",marginTop:"40px", marginLeft:"300px"}}>
                <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter"}}>Shop New Arrivals</h1>
                <button style={{marginLeft:"20px",backgroundColor:"white",height:"50px",width:"150px",marginTop:"20px",border:"solid 0.5px",fontWeight:"bold"}}>Shop Women</button>
                <button style={{marginLeft:"20px",backgroundColor:"white",height:"50px",width:"150px",marginTop:"20px",border:"solid 0.5px",fontWeight:"bold"}}>Shop Men</button>
                <button style={{marginLeft:"20px",backgroundColor:"white",height:"50px",width:"150px",marginTop:"20px",border:"solid 0.5px",fontWeight:"bold"}}>Shop Girls</button>
                <button style={{marginLeft:"20px",backgroundColor:"white",height:"50px",width:"150px",marginTop:"20px",border:"solid 0.5px",fontWeight:"bold"}}>Shop Boys</button>
            </div>
            <div style={{backgroundColor:"#C7CA99",height:"auto",width:"100%",marginTop:"55px"}}>
                <div style={{display:"flex"}}>
                    <img style={{height:"200px",width:"210px",marginTop:"40px",paddingLeft:"650px"}} src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic" alt=""/>
                    <p style={{marginTop:"220px",fontWeight:"bold",paddingLeft:"260px"}}>Meet our creative community </p>
                </div>
                <div style={{display:"flex",justifyContent:"space-evenly",marginLeft:"120px",marginRight:"120px",marginTop:"25px"}}>
                    <img style={{height:"500px",width:"380px"}} src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img7.jpg" alt="" />
                    <img style={{height:"500px",width:"380px"}} src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img8.jpg" alt="" />
                    <img style={{height:"500px",width:"380px"}} src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img9.jpg" alt="" />
                </div>
                <div style={{display:"flex",marginLeft:"120px",marginRight:"120px"}}>
                    <div style={{height:"230px",width:"380px"}}>
                        <p style={{marginRight:"130px"}}>1 Swimsuit, 2 ways</p>
                        <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",paddingLeft:"30px",marginTop:"-10px"}}>How I wear my ruched one-piece with Jen Azoulay </h1>
                        <h4 style={{paddingRight:"70px",textDecoration:"underline"}}>Find some poolside inspo</h4>
                    </div>
                    <div style={{height:"230px",width:"380px"}}>
                    <p style={{marginRight:"110px"}}>What to wear next</p>
                        <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",paddingLeft:"45px",marginTop:"-10px"}}>The new dress code with Beverly Nguyen </h1>
                        <h4 style={{paddingRight:"70px",textDecoration:"underline"}}>Try this styling tricks</h4>
                    </div>
                    <div style={{height:"230px",width:"380px"}}>
                    <p style={{marginRight:"30px"}}>The new arrivals edit</p>
                        <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",paddingLeft:"85px",marginTop:"-10px"}}>Instant classics with Allison Bornstein </h1>
                        <h4 style={{textDecoration:"underline",paddingLeft:"30px"}}>Shop her summer essentials</h4>
                    </div>
                </div>
                <div>
                    <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",fontSize:"50px",marginRight:"900px"}}>More Stories</h1>
                </div>
                <div>
                    <img style={{height:"300px",width:"250px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul/v2/2022jul_0628_hp_w_img10.jpg" alt=""/>
                    <img style={{height:"300px",width:"250px",paddingLeft:"20px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul/v2/2022jul_0628_hp_w_img11.jpg" alt=""/>
                    <img style={{height:"300px",width:"250px",paddingLeft:"20px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul/v2/2022jul_0628_hp_w_img12.jpg" alt=""/>
                    <img style={{height:"300px",width:"250px",paddingLeft:"20px"}} src="https://www.jcrew.com/brand_creative/homepage2022/07-Jul/v2/2022jul_0628_hp_w_img13.jpg" alt=""/>
                </div>
                <div style={{display:"flex",marginLeft:"120px",marginRight:"120px"}}>
                    <div style={{height:"210px",width:"280px"}}>
                        <h2 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",paddingLeft:"110px"}}>The edit: beachy blooms</h2>
                        <p style={{paddingLeft:"140px", textDecoration:"underline"}}>Shop our packing list</p>
                    </div>
                    <div style={{height:"210px",width:"280px"}}>
                         <h2 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",paddingLeft:"110px"}}>Most wanted:the Zoe ballet collection</h2>
                        <p style={{paddingLeft:"60px", textDecoration:"underline"}}>get a closer look</p>
                    </div>
                    <div style={{height:"210px",width:"280px"}}>
                         <h2 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",paddingLeft:"130px"}}>Creative spirits series:Monrowe X J.crew</h2>
                        <p style={{paddingLeft:"140px", textDecoration:"underline"}}>Meet founder Dani Evans</p>
                    </div>
                    <div style={{height:"210px",width:"280px"}}>
                         <h2 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",paddingLeft:"130px"}}>The edit: Sunset reds</h2>
                        <p style={{paddingLeft:"140px", textDecoration:"underline"}}>Shop the color story</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",fontSize:"35px",marginBottom:"30px"}}>You'll Also Love</h1>
            </div>
            <div style={{display:"flex",marginLeft:"20px",paddingRight:"20px"}}>
              <img style={{height:"230px",width:"230px"}} src="https://www.jcrew.com/s7-img-facade/AX974_BL8133?wid=376" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/BI579_BK0001?wid=376" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/BF450_GY5218_m?wid=376" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/AW694_WT0002_m?wid=376" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/AW275_EB9389?wid=376" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/H5809_PR5982_m?wid=376" alt=""/>
            </div>
            <div>
                <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",fontSize:"35px",marginBottom:"30px"}}>Shop Our Instagram</h1>
            </div>
            <div style={{display:"flex",marginLeft:"40px",marginRight:"40px"}}>
                <img style={{height:"320px",width:"300px",paddingLeft:"40px"}} src="https://edge.curalate.com/v1/img/OTj4csjB4WFTsgPslA6Y5-yvWTrBYOj5PhA4SP92sqA=/w/450?typ=webp" alt=""/>
                <img style={{height:"320px",width:"300px",paddingLeft:"40px"}} src="https://edge.curalate.com/v1/img/ToBFDxTc90euACmuXlCyok9Ks33RHbkFAm9Sq1VyUFI=/w/450?typ=webp" alt=""/>
                <img style={{height:"320px",width:"300px",paddingLeft:"40px"}} src="https://edge.curalate.com/v1/img/-Fsqv0sA4n1JyFB9PiSqnn6wWt7KZn8TSmxubvkuyF0=/w/600?typ=webp" alt=""/>
                <img style={{height:"320px",width:"300px",paddingLeft:"40px"}} src="https://edge.curalate.com/v1/img/0nE5Wz2gsBet1pfGXV6hq62KyaqUlHwl0iW4wVGI57M=/w/600?typ=webp" alt=""/>

            </div>
            <div>
                <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",fontSize:"35px",marginBottom:"30px"}}>More you need to see</h1>
            </div>
            <div style={{display:"flex",marginLeft:"20px",paddingRight:"20px",marginBottom:"50px"}}>
              <img style={{height:"230px",width:"230px"}} src="https://www.jcrew.com/s7-img-facade/BI650_BL7683_m?wid=416" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/BI437_PT1317_m?wid=416" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/BG652_BK0001_m?wid=416" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/BH925_NA6549_m?wid=416" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/BH914_GR0086_m?wid=416" alt=""/>
              <img style={{height:"230px",width:"230px",paddingLeft:"20px"}} src="https://www.jcrew.com/s7-img-facade/BC108_PK5748_m?wid=416" alt=""/>
            </div>
            <hr></hr>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Home;