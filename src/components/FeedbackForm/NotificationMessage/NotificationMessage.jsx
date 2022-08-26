import PropTypes from 'prop-types';

import s from "./notificationMessage.module.css"

const NotificationMessage = ({title}) => {
    return (
        <h3 className={s.notificationMessageTitle}>{title}</h3>
    )
}

export default NotificationMessage;

NotificationMessage.defaultProps = {
    title: "No information available",
}

NotificationMessage.propTypes = {
    title: PropTypes.string.isRequired,
    }