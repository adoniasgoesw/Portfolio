import FooterPortrait from "../assets/footer-portrait.png";

export default function FooterAvatar() {
  return (
    <div className="absolute right-15 md:right-80 md:bottom-2 z-10">
      <div className="w-72 h-72">
        <img
          src={FooterPortrait}
          alt="Character at rest"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
