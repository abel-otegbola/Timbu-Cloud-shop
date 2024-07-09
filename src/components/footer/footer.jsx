import { Link } from "react-router-dom";
import HeadphoneIcon from "../../assets/icons/headphoneIcon";
import TwitterIcon from "../../assets/icons/twitterIcon";
import InstagramIcon from "../../assets/icons/instagramIcon";
import FacebookIcon from "../../assets/icons/facebookIcon";
import GmailIcon from "../../assets/icons/gmailIcon";

export default function Footer() {
    return (
        <footer className="flex flex-wrap md:gap-[5%] p-[7%] bg-primary text-white mt-4 gap-10">
            <div className="md:w-[20%] w-full flex flex-col gap-1">
                <h2 className="font-bold mb-3 text-lg">Our Address</h2>
                <p>47, Real Trench, Trench Town, Port Harcourt, Nigeria</p>
                <p>(+234)  807 654 321</p>
                <p>hybrid@bookstore.com</p>
            </div>

            <div className="md:w-[30%] w-full">
                <h2 className="font-bold mb-3 text-lg">Join The Hybrid Worm</h2>
                <p>A weekly newsletter from Hybrid Books where we share recommendations of the best books, exclusive discounts, and details of our online Book Club meetings.</p>
                <button className="p-2 px-5 bg-secondary hover:bg-primary hover:border border-secondary text-white rounded-[20px] mt-4">Subscribe</button>
            </div>

            <div className="md:w-[15%] w-full flex flex-col gap-1">
                <h2 className="font-bold mb-3 text-lg">More</h2>
                <Link to={"/"} className="block">Blog</Link>
                <Link to={"/"} className="block">New Releases</Link>
                <Link to={"/"} className="block">Explore Genres</Link>
                <Link to={"/"} className="block">Download Free Books</Link>
                <Link to={"/"} className="block">Terms And Conditions</Link>
            </div>
            
            <div className="md:w-[15%] w-full flex flex-col gap-1">
                <h2 className="font-bold mb-3 text-lg">Contact Us</h2>
                <Link to={"/"} className="flex items-center gap-1">
                    <HeadphoneIcon />
                    Customer Service
                </Link>
                <Link to={"/"} className="flex items-center gap-1">
                    <TwitterIcon />
                    X
                </Link>
                <Link to={"/"} className="flex items-center gap-1">
                    <InstagramIcon />
                    Instagram
                </Link>
                <Link to={"/"} className="flex items-center gap-1">
                    <FacebookIcon />
                    Facebook
                </Link>
                <Link to={"/"} className="flex items-center gap-1">
                    <GmailIcon />
                    Gmail
                </Link>
            </div>
        </footer>
    )
}