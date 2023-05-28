function SocialMediaIcon({ children, href }) {
  return (
    <li>
      <a
        target="_blank"
        className="text-white text-3xl hover:text-brand-dark transition-all duration-200"
        {...{ href }}
      >
        {children}
      </a>
    </li>
  );
}

export default SocialMediaIcon;
