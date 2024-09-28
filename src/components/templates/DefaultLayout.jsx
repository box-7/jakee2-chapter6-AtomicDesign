import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
        // childrenには、TopまたはUsersが来る
        const { children } = props;
        return (
                <>
                        <Header />
                                {children}
                        <Footer />
                </>
        );
};


// prop-typesを使ってchildrenを検証する
import PropTypes from 'prop-types';
DefaultLayout.propTypes = {
        children: PropTypes.node
};

