import { Link } from "react-router-dom"
import styled from "styled-components";
export const Header = () => {
        return (
                <SHeader>
                        <SLink to="/">Home</SLink>
                        <SLink to="/users">Users</SLink>
                </SHeader>
        );
};

const SHeader = styled.header`
        background-color: #11999e;
        color: #fff;
        text-align: center;
        padding: 8px 0;
`;

// Linkにstyledを当てていく場合の書き方
const SLink = styled(Link)`
        margin: 0 8px;
`;