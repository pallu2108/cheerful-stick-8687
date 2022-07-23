import Footer from "./Footer";
import Navbar from "./Navbar";

function ShirtsAndTops(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <p style={{textAlign:"center"}}>Have a question?We can help.</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <div>
                     <h1 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter",paddingTop:"150px",fontSize:"40px"}}>Summer's top picks</h1>
                     <p>New colors , new prints, new details..</p>
                </div>
                <img style={{height:"100%",width:"25%"}} src="https://www.jcrew.com/brand_creative/2022/202205-May/w_shirts/2022may_0426_w_tops_img0.jpg" alt=""/>
                <img style={{height:"100%",width:"25%"}} src="https://www.jcrew.com/brand_creative/2022/202205-May/w_shirts/2022may_0426_w_tops_img1.jpg" alt=""/>
                <img style={{height:"100%",width:"25%"}} src="https://www.jcrew.com/brand_creative/2022/202205-May/w_shirts/2022may_0426_w_tops_img2.jpg" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",marginBottom:"20px"}}>
               <div style={{paddingLeft:"450px"}}>
                <h2 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter"}}>For Everyday</h2>
                <p style={{textDecoration:"underline"}}>Shop all</p>
               </div>
               <div style={{paddingLeft:"270px"}}>
               <h2 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter"}}>For going out</h2>
                <p style={{textDecoration:"underline"}}>Shop all</p>
               </div>
               <div style={{paddingLeft:"300px"}}>
               <h2 style={{fontFamily:"freight-big-pro,Times,serif",fontWeight:"lighter"}}>For Work</h2>
                <p style={{textDecoration:"underline"}}>Shop all</p>
               </div>
            </div>
            <div style={{marginBottom:"25px"}}>
                <button style={{height:"40px",width:"150px",backgroundColor:"white",marginRight:"20px"}}>Show Filters</button>
                <button style={{height:"40px",width:"150px",backgroundColor:"white",marginRight:"1120px"}}>Featured</button>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BL707_RD5712_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BL706_PT1350_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI427_PT1350_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Organic cotton poplin halter top</p>
                <h4>INR 4,069</h4>
               </div>
               <div style={{paddingRight:"250px"}}>
               <p>Halter Top in Ratti</p>
                <h4>INR 11,982</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Classic-fit cotton poplin popover top in Ratti</p>
                <h4>INR 14,638</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ391_PT1339_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BL005_PR5683_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BL006_PT0317_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Tassel tie-front crop top in breezy blooms</p>
                <h4>INR 7,954</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Ruffle tie-neck top</p>
                <h4>INR 9,291</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Ruffle tie-neck top leopard print</p>
                <h4>INR 10,627</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BL037_PT2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BL061_PT1995_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BG314_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>V-neck cupro-blend camisole in zebra stripe</p>
                <h4>INR 10,627</h4>
               </div>
               <div style={{paddingRight:"150px"}}>
               <p>Long-sleeve soft guaze garden top in whimsy paisley</p>
                <h4>INR 15,774</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Long sleeve soft guaze garden top</p>
                <h4>INR 13,100</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI958_PT1341_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI508_PT1341_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AM621_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Classic-fit soft guaze shirt in tossed floral</p>
                <h4>INR 10,693</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Garden soft guaze top in tossed floral</p>
                <h4>INR 11,964</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Garden top in soft guaze</p>
                <h4>INR 11,964</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI435_PT1338_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI433_OR5964_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI434_PT1329_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Organic cotton poplin halter top</p>
                <h4>INR 4,069</h4>
               </div>
               <div style={{paddingRight:"250px"}}>
               <p>Halter Top in Ratti</p>
                <h4>INR 11,982</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Classic-fit cotton poplin popover top in Ratti</p>
                <h4>INR 14,638</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI419_PT1365_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI432_GR0086_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AY671_GR7014_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Tassel tie-front crop top in breezy blooms</p>
                <h4>INR 7,954</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Ruffle tie-neck top</p>
                <h4>INR 9,291</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Ruffle tie-neck top leopard print</p>
                <h4>INR 10,627</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI499_PT1329_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ080_PT1340_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ083_PT1395_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Organic cotton poplin halter top</p>
                <h4>INR 4,069</h4>
               </div>
               <div style={{paddingRight:"250px"}}>
               <p>Halter Top in Ratti</p>
                <h4>INR 11,982</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Classic-fit cotton poplin popover top in Ratti</p>
                <h4>INR 14,638</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ082_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ171_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ172_PT1396_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Tassel tie-front crop top in breezy blooms</p>
                <h4>INR 7,954</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Ruffle tie-neck top</p>
                <h4>INR 9,291</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Ruffle tie-neck top leopard print</p>
                <h4>INR 10,627</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AM621_GR7076_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AM621_PK6157_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ567_PT1341_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Organic cotton poplin halter top</p>
                <h4>INR 4,069</h4>
               </div>
               <div style={{paddingRight:"250px"}}>
               <p>Halter Top in Ratti</p>
                <h4>INR 11,982</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Classic-fit cotton poplin popover top in Ratti</p>
                <h4>INR 14,638</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AW694_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AW694_BL8227_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AW694_BL8133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Tassel tie-front crop top in breezy blooms</p>
                <h4>INR 7,954</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Ruffle tie-neck top</p>
                <h4>INR 9,291</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Ruffle tie-neck top leopard print</p>
                <h4>INR 10,627</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AW694_NA6436_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AY665_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AY665_BL8227_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Organic cotton poplin halter top</p>
                <h4>INR 4,069</h4>
               </div>
               <div style={{paddingRight:"250px"}}>
               <p>Halter Top in Ratti</p>
                <h4>INR 11,982</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Classic-fit cotton poplin popover top in Ratti</p>
                <h4>INR 14,638</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AY665_YD1036_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AY665_NA6436_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AY665_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Tassel tie-front crop top in breezy blooms</p>
                <h4>INR 7,954</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Ruffle tie-neck top</p>
                <h4>INR 9,291</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Ruffle tie-neck top leopard print</p>
                <h4>INR 10,627</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI431_GR6974_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI431_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI431_BL8133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Organic cotton poplin halter top</p>
                <h4>INR 4,069</h4>
               </div>
               <div style={{paddingRight:"250px"}}>
               <p>Halter Top in Ratti</p>
                <h4>INR 11,982</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Classic-fit cotton poplin popover top in Ratti</p>
                <h4>INR 14,638</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AW686_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/AW686_BL7765_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BH925_RD6286_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Tassel tie-front crop top in breezy blooms</p>
                <h4>INR 7,954</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Ruffle tie-neck top</p>
                <h4>INR 9,291</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Ruffle tie-neck top leopard print</p>
                <h4>INR 10,627</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BF356_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ170_PR6127_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ081_BL7133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Organic cotton poplin halter top</p>
                <h4>INR 4,069</h4>
               </div>
               <div style={{paddingRight:"250px"}}>
               <p>Halter Top in Ratti</p>
                <h4>INR 11,982</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Classic-fit cotton poplin popover top in Ratti</p>
                <h4>INR 14,638</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI436_PK5826_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI420_PT1366_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI430_PT1366_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Tassel tie-front crop top in breezy blooms</p>
                <h4>INR 7,954</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Ruffle tie-neck top</p>
                <h4>INR 9,291</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Ruffle tie-neck top leopard print</p>
                <h4>INR 10,627</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI507_WY9674_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BH915_GR0086_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI959_PT1979_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Organic cotton poplin halter top</p>
                <h4>INR 4,069</h4>
               </div>
               <div style={{paddingRight:"250px"}}>
               <p>Halter Top in Ratti</p>
                <h4>INR 11,982</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Classic-fit cotton poplin popover top in Ratti</p>
                <h4>INR 14,638</h4>
               </div>
            </div>
            <div style={{display:"flex",height:"450px",width:"100%",justifyContent:"space-evenly"}}>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI416_PT2252_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BJ529_WY9098_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
                <img style={{height:"100%",width:"30%"}} src="https://www.jcrew.com/s7-img-facade/BI957_YD1318_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309" alt=""/>
            </div>
            <div style={{display:"flex",height:"100px",width:"100%",justifyContent:"space-evenly"}}>
               <div style={{paddingRight:"150px"}}>
                <p>Tassel tie-front crop top in breezy blooms</p>
                <h4>INR 7,954</h4>
               </div>
               <div style={{paddingRight:"100px"}}>
               <p>Ruffle tie-neck top</p>
                <h4>INR 9,291</h4>
               </div>
               <div style={{paddingRight:"50px"}}>
               <p>Ruffle tie-neck top leopard print</p>
                <h4>INR 10,627</h4>
               </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default ShirtsAndTops;