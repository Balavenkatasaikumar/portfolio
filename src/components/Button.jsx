import PropTypes from "prop-types";

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes,
  onClick,
  download = false
}) => {
  const handleClick = (e) => {
    if (download) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <a
        href={download ? '#' : href}
        target={target}
        className={"btn btn-primary " + classes}
        onClick={download ? handleClick : onClick}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    )
  } else {
    return (
      <button 
        className={"btn btn-primary " + classes}
        onClick={onClick}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  download: PropTypes.bool
}

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes,
  onClick
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
        onClick={onClick}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    )
  } else {
    return (
      <button 
        className={"btn btn-outline " + classes}
        onClick={onClick}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func
}

export {
  ButtonPrimary,
  ButtonOutline
}