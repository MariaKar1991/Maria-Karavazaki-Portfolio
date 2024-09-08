import "./AvatarAnimation.css";

/**
 * AvatarAnimation component renders an animated avatar image.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
export default function AvatarAnimation(): JSX.Element {
  return (
    <div className="avatar-animation-container fixed top-0 left-0 min-w-full h-full flex justify-center items-center">
      <div className="image-container relative flex justify-center items-center w-full h-[90%]">
        <img
          className="avatar-animation-image max-w-full max-h-full mx-auto"
          src="/images/total-gray-avatar.png"
          alt="avatar image"
        />
      </div>
    </div>
  );
}
