import styles from "../style";
import { logo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}></p>
        </div>

        <div className={`flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10`}>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className={`flex flex-col sm:my-0 my-4 min-w-[150px]`}>
              <h4 className="poppins text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link, index) => (
                  <a href={link.link} key={link.name}>
                    <li
                      className={`poppins-el text-[16px] leading-[24px] text-dimWhite hover:text-purple-400 cursor-pointer ${
                        index !== footerLink.links.length - 1 ? "mb-3" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-1px border-t">
        <p className="poppins-l text-[18px] leading-[27px] text-dimWhite text-center">2024 HooBank. All Rights Reserved.</p>
        <div className={`flex flex-row md:mt-10 mt-6`}>
          {socialMedia.map((social, index) => (
            <a href={social.link} alt={social.name}>
              <img
                key={social.id}
                src={social.logo}
                alt="social"
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-4" : "mr-0"} hover:opacity-70`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
