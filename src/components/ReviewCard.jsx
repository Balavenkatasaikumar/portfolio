import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ReviewCard = ({ content, name, imgSrc, company, rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [
    ...Array(fullStars).fill(<FaStar className="text-yellow-400" />),
    ...(hasHalfStar ? [<FaStarHalfAlt className="text-yellow-400" />] : []),
    ...Array(emptyStars).fill(<FaRegStar className="text-yellow-400" />),
  ];

  return (
    <div className="bg-white text-zinc-800 rounded-xl p-6 w-80 flex-shrink-0 h-full shadow-lg border border-zinc-200">
      <div className="flex space-x-1 mb-4">
        {stars.map((star, index) => (
          <span key={index} className="text-lg">{star}</span>
        ))}
        <span className="ml-1 text-sm text-zinc-500">{rating.toFixed(1)}</span>
      </div>
      <p className="text-sm mb-6 leading-relaxed text-zinc-700">{content}</p>
      <div className="flex items-center space-x-4 mt-auto">
        <img 
          src={imgSrc} 
          alt={name} 
          className="w-10 h-10 rounded-full object-cover" 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/40';
          }}
        />
        <div>
          <p className="font-medium text-zinc-900">{name}</p>
          <p className="text-xs text-zinc-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ReviewCard;