import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import dividerFlower from "../../assets/images/flower-divider.webp";
import Icon from "../../utils/Icon";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#28231e] h-auto">
      <div className="mx-auto py-4 text-[#aea493] pt-10 flex justify-between items-center max-w-7xl sm:px-6 lg:px-8">
        <div className="w-1/3 h-36">
          <h3 className="text-2xl text-center font-semibold text-[#cd6727]">
            Contact Us
          </h3>
          <div className="mt-4">
            <Icon icon={faLocationDot} /> India Isha Yoga Centre, Velliangiri
            Foothills, Ishana Vihar Post, Coimbatore, Tamil Nadu - 641114
            <div className="mt-2">
              <Icon icon={faPhone} />
              <span className="ml-2">
                <Link to="tel:+918300083111">+91 8300083111,</Link>
              </span>
              <span className="ml-2"> 04224283111,</span>
              <span className="ml-2"> 04223583111</span>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-28 flex justify-center">
          <img src={dividerFlower} alt="" />
        </div>
        <div className="w-1/3 h-36">
          <h3 className="text-2xl text-center font-semibold text-[#cd6727]">
            Find Us in social media
          </h3>
          <div className="mt-4 text-center flex justify-center">
            <div className=" space-x-4">
              <Link to={"https://www.facebook.com/sadhguru"}>
                <Icon
                  icon={faFacebook}
                  size="xl"
                  className=" hover:text-[#cd6727]"
                />
              </Link>
              <Link to={"https://www.instagram.com/sadhguru"}>
                <Icon
                  icon={faInstagram}
                  size="xl"
                  className=" hover:text-[#cd6727]"
                />
              </Link>
              <Link to={"https://twitter.com/SadhguruJV"}>
                <Icon
                  icon={faTwitter}
                  size="xl"
                  className=" hover:text-[#cd6727]"
                />
              </Link>
              <Link to={"https://www.linkedin.com/in/sadhguruJV/?ppe=1"}>
                <Icon
                  icon={faLinkedin}
                  size="xl"
                  className=" hover:text-[#cd6727]"
                />
              </Link>
              <Link to={"http://www.youtube.com/sadhguru"}>
                <Icon
                  icon={faYoutube}
                  size="xl"
                  className=" hover:text-[#cd6727]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-[1px] text-[#6e665b] border-[#8a8173] flex items-center justify-center py-6">
        Copyright © 1999 - 2023{"   "}
        <Link
          to={
            "https://isha.sadhguru.org/in/en/copyright-privacy-policy-terms?_ga=2.125182730.1406400090.1689585913-1001437725.1689057022&_gl=1*1tarqla*_ga*MTAwMTQzNzcyNS4xNjg5MDU3MDIy*_ga_SY4BXCXZFY*MTY4OTc2MDkzOC4xNi4xLjE2ODk3NjA5NDguNTAuMC4w"
          }
        >
        Isha Foundation. All Rights Reserved.{" "}
        </Link>{" "}
        <span className="px-1 text-gray-300">|</span>
        <Link
          to={
            "https://isha.sadhguru.org/in/en/copyright-privacy-policy-terms?_ga=2.92219930.1406400090.1689585913-1001437725.1689057022&_gl=1*t25u4j*_ga*MTAwMTQzNzcyNS4xNjg5MDU3MDIy*_ga_SY4BXCXZFY*MTY4OTc2MDkzOC4xNi4xLjE2ODk3NjA5NDguNTAuMC4w"
          }
        >
          Terms & Conditions
        </Link>{" "}
        <span className="px-1 text-gray-300">|</span>
        <Link
          to={
            "https://isha.sadhguru.org/in/en/copyright-privacy-policy-terms?_ga=2.92219930.1406400090.1689585913-1001437725.1689057022&_gl=1*t25u4j*_ga*MTAwMTQzNzcyNS4xNjg5MDU3MDIy*_ga_SY4BXCXZFY*MTY4OTc2MDkzOC4xNi4xLjE2ODk3NjA5NDguNTAuMC4w"
          }
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
