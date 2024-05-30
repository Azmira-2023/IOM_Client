
import PropTypes from "prop-types";

const RightArrowIcon = ({ width = "28", height = "28", className })=> {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
            <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 4.16406L15.8333 9.9974L10 15.8307" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

RightArrowIcon.propTypes = {
    Width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
};

// RightArrowIcon.defaultProps = {
//     Width: "28",
//     height: "28",
// };

export default RightArrowIcon;