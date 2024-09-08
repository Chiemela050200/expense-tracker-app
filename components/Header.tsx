<<<<<<< Updated upstream
import { Nav } from "react-bootstrap";
import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
    return (<nav className="navbar">
        <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <div>
            <SignedOut>
                <SignInButton>
                    <SignedIn>
                        <UserButton>
                            
                        </UserButton>
                    </SignedIn>
                </SignInButton>
            </SignedOut>
        </div>
        </div>
    </nav>);
}
 
export default Header;
=======
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '../lib/checkUser';


const Header = async () => {
    const user = await checkUser();
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2>Expense Tracker</h2>
                <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
}

export default Header;
>>>>>>> Stashed changes
