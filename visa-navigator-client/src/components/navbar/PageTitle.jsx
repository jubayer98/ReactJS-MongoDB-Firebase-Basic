import { useEffect } from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title, children }) => {
    useEffect(() => {
        document.title = `${title}`;
    }, [title]);

    return <>{children}</>;
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,  
    children: PropTypes.node             
};

export default PageTitle;