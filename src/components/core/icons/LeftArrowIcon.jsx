import PropTypes from "prop-types";

const LeftArrowIcon = ({ width = "28", height = "28", className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
            <path d="M15.8327 10H4.16602" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99935 15.8307L4.16602 9.9974L9.99935 4.16406" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

LeftArrowIcon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
};

// LeftArrowIcon.defaultProps = {
//     width: "28",
//     height: "28",
// };

export default LeftArrowIcon;