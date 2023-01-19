import "./styles.scss";

export default function SocialIcons(props) {
  return (
    <div className="social-icons">
      <a href="https://github.com/Contrick64">
        <i className="devicon-github-plain" />
      </a>
      <a href="https://www.linkedin.com/in/contrick/">
        <i className="devicon-linkedin-plain" />
      </a>
      <a href="mailto:connor@murphysites.com">
        <svg
          fill="currentColor"
          viewBox="0 -9.31 56.223 56.223"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="email_unread"
            data-name="email unread"
            d="M798.377,169.859h.012a2.16,2.16,0,0,0,1.181-.346l.092-.059.063-.039,1.071-.887,25.563-21.094a.3.3,0,0,0-.239-.123H770.492a.291.291,0,0,0-.183.066l26.745,22.045A2.1,2.1,0,0,0,798.377,169.859ZM770.2,150.3v31.268l19.159-15.476Zm37.084,15.9,19.139,15.38V150.4Zm-6.085,5.021a4.559,4.559,0,0,1-5.619.005l-4.388-3.619L770.2,184.558v.053a.3.3,0,0,0,.3.3h55.625a.3.3,0,0,0,.3-.3v-.049l-20.974-16.852Z"
            transform="translate(-770.195 -147.311)"
          />
        </svg>
      </a>
    </div>
  );
}