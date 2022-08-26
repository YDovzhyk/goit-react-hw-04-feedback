import PropTypes from 'prop-types';

import s from "./sectionTitle.module.css"

const SectionTitle = ({title, children}) => {
    return (
        <div className={s.block}>
            <h2 className="s.feedbackFormTitle">{title}</h2>
            {children}
        </div>
    )
}


export default SectionTitle;

SectionTitle.defaultProps = {
    title: "No information available",
    children: {},
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    }