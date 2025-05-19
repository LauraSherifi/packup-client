import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaGoogle, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub 
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const socialIcons = [
    { icon: <FaFacebookF />, key: 'facebook' },
    { icon: <FaTwitter />, key: 'twitter' },
    { icon: <FaGoogle />, key: 'google' },
    { icon: <FaInstagram />, key: 'instagram' },
    { icon: <FaLinkedinIn />, key: 'linkedin' },
    { icon: <FaGithub />, key: 'github' }
  ];

  return (
    <footer className="bg-dark text-center text-white">
      <div className="container py-4 pb-0"
      style={{
        // marginTop:'100px',
      }}>
        <section className="mb-4">
          {socialIcons.map((social) => (
            <button
              key={social.key}
              className="btn btn-outline-light btn-floating m-1"
              type="button"
              aria-label={social.key}
            >
              {social.icon}
            </button>
          ))}
        </section>
      </div>

      <div 
        className="text-center p-3" 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        }}
      >
        © {new Date().getFullYear()} abcabc
        <a className="text-white ms-1" href="abc">
        </a>
      </div>
    </footer>
  );
};

export default Footer;