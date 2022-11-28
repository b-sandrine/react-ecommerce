import React from "react";

function Navigation () {
    return (
        <div>
            <nav>
                <pre>
                    <a href="/" className="active">Home    </a>     
                    <a href="/about">About us    </a>     
                    <a href="/portfolio">Portfolio    </a>    
                    <a href="/login">Login    </a>   
                    <a href="/signup">Signup    </a>   
                </pre>
                
            </nav>
        </div>
    )
}

export default Navigation;