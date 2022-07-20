import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            
        <div style={{display:"flex"}}> 
        <div>
        <img style={{height:"70px", width:"120px", paddingLeft:"50px",}} src="https://www.bing.com/th?id=OIP.aCU8JUA7fIKemvaanWtB0QHaEf&w=320&h=194&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt=""/>
        </div>
            <div style={{display:"flex",color:"black", paddingRight:"40px",paddingLeft:"30px",marginTop:"10px"}}>
             <Link to="/new" style={{textDecoration:"none"}}><h4 style={{color:"black", paddingLeft:"30px", fontSize:"15px"}}>New</h4></Link>
             <Link to="/women" style={{textDecoration:"none"}}><h4 style={{color:"black", paddingLeft:"30px",fontSize:"15px"}}>Women</h4></Link>
             <Link to="/men" style={{textDecoration:"none"}}><h4 style={{color:"black",paddingLeft:"30px",fontSize:"15px"}}>Men</h4></Link>
             <Link to="/kids" style={{textDecoration:"none"}}><h4 style={{color:"black",paddingLeft:"30px",fontSize:"15px"}}>Kids</h4></Link>
             <Link to="/swim" style={{textDecoration:"none"}}><h4 style={{color:"black",paddingLeft:"30px",fontSize:"15px"}}>Swim</h4></Link>
             <Link to="/cashmere" style={{textDecoration:"none"}}><h4 style={{color:"black",paddingLeft:"30px",fontSize:"15px"}}>Cashmere</h4></Link>
             <Link to="/home" style={{textDecoration:"none"}}><h4 style={{color:"black",paddingLeft:"30px",fontSize:"15px"}}>Home</h4></Link>
             <Link to="/stories" style={{textDecoration:"none"}}><h4 style={{color:"black",paddingLeft:"30px",fontSize:"15px"}}>Stories</h4></Link>
             <Link to="/sale" style={{textDecoration:"none"}}><h4 style={{color:"black",paddingLeft:"30px",fontSize:"15px"}}>Sale</h4></Link>
            </div>  
            <div>
                <input style={{marginTop:"25px", marginLeft:"140px",height:"30px", paddingLeft:"20px", width:"170px"}} type="text" placeholder="search J.crew" ></input>
            </div>
            <button style={{border:"none",height:"50px", width:"80px", marginLeft:"20px",marginTop:"13px", fontSize:"17px",backgroundColor:"white"}}>Sign In</button> 
        </div>
        <hr></hr>
        </div>
    )
}
export default Navbar;