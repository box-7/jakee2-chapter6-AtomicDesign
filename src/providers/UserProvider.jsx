import React, { createContext } from "react";

// 他のコンポーネントからも呼ばれるのでexportする
export const UserContext = createContext({});

// バリューでglobalな値を提供する
export const UserProvider = (props) => {
        const { children } = props;
        const [userInfo, setUserInfo] = React.useState(null);

        return (
                <UserContext.Provider value={{ userInfo, setUserInfo }} >
                        {children}
                </UserContext.Provider>
        );
};

// prop-typesを使ってchildrenを検証する
import PropTypes from 'prop-types';
UserProvider.propTypes = {
        children: PropTypes.node,
};
