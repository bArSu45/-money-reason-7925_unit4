import "./App.css"
export default function Navbar(){
    return(
        <div id="navbar">
            <img src="https://www.logolynx.com/images/logolynx/12/12c0a434d2bc6a85eaacca0600cf2616.png" alt="jcrew"/>
            <div id="nav">
            <p>New</p>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Swim</p>
            <p>Cashmere</p>
            <p>Home</p>
            <p>Stories</p>
            <p>Sale</p>
            </div>
            <div id="input">
            <input id="search" type="text" placeholder="search j.crew"/>
            </div>
            <p id="signin">Signin</p>
            <div id="cart">
            <img id="cart_img" src="https://cdn1.iconfinder.com/data/icons/e-commerce-320/512/bag-512.png" alt="cart"/>   
            </div>
            
            
        </div>
        
    )
}