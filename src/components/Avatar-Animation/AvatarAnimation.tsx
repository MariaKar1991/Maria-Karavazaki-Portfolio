import "./AvatarAnimation.css";

/**
 * AvatarAnimation component renders an animated avatar image.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
export default function AvatarAnimation(): JSX.Element {
  return (
    <div className="avatar-animation-container">
      <div className="image-container">
        <img
          className="avatar-animation-image"
          src="/total-gray-avatar.png"
          alt="avatar image"
        />
      </div>
    </div>
  );
}
