import { Link } from "react-router-dom";
import HeadphoneIcon from "../../assets/icons/headphoneIcon";
import TwitterIcon from "../../assets/icons/twitterIcon";
import InstagramIcon from "../../assets/icons/instagramIcon";
import FacebookIcon from "../../assets/icons/facebookIcon";
import GmailIcon from "../../assets/icons/gmailIcon";

export default function Footer() {
    return (
        <footer className="flex flex-wrap md:gap-[5%] p-[7%] bg-primary text-white mt-4 gap-10">
            <div className="md:w-[20%] w-full flex flex-col gap-4">
                <h2 className="font-bold 22xl:text-[20px] text-lg">Our Address</h2>
                <div className="">
                    <p>47, Real Trench, Trench Town, Port Harcourt, Nigeria</p>
                    <p>(+234)  807 654 321</p>
                    <p>hybrid@bookstore.com</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:w-[30%] w-full">
                <h2 className="font-bold 2xl:text-[20px] text-lg">Join The Hybrid Worm</h2>
                <p>A weekly newsletter from Hybrid Books where we share recommendations of the best books, exclusive discounts, and details of our online Book Club meetings.</p>
                <button className="w-fit p-2 px-5 bg-secondary hover:bg-primary hover:border border-secondary text-white rounded-[20px]">Subscribe</button>
            </div>

            <div className="md:w-[15%] w-full flex flex-col gap-4">
                <h2 className="font-bold 2xl:text-[20px] text-lg">More</h2>
                <div>
                    <Link to={"/"} className="block hover:text-secondary">Blog</Link>
                    <Link to={"/"} className="block hover:text-secondary">New Releases</Link>
                    <Link to={"/"} className="block hover:text-secondary">Explore Genres</Link>
                    <Link to={"/"} className="block hover:text-secondary">Download Free Books</Link>
                    <Link to={"/"} className="block hover:text-secondary">Terms And Conditions</Link>
                </div>
            </div>
            
            <div className="md:w-[15%] w-full flex flex-col gap-4">
                <h2 className="font-bold 2xl:text-[20px] text-lg">Contact Us</h2>
                <div>
                    <Link to={"/"} className="flex items-center gap-1 hover:text-secondary">
                        <HeadphoneIcon />
                        Customer Service
                    </Link>
                    <Link to={"/"} className="flex items-center gap-1 hover:text-secondary">
                        <TwitterIcon />
                        X
                    </Link>
                    <Link to={"/"} className="flex items-center gap-1 hover:text-secondary">
                        <InstagramIcon />
                        Instagram
                    </Link>
                    <Link to={"/"} className="flex items-center gap-1 hover:text-secondary">
                        <FacebookIcon />
                        Facebook
                    </Link>
                    <Link to={"/"} className="flex items-center gap-1 hover:text-secondary">
                        <GmailIcon />
                        Gmail
                    </Link>
                </div>
            </div>
        </footer>
    )
}