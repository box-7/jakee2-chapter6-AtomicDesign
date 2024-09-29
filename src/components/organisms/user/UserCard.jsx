import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
        console.log("UserCard");
        // const { user, isAdmin } = props;
        const { user } = props;
        return (
                <Card>
                        {/* <UserIconWithName image={user.image} name={user.name}  isAdmin={isAdmin} /> */}
                        <UserIconWithName src={user.image} name={user.name} />
                        <SDl>
                                <dt>メール</dt>
                                <dd>{user.email}</dd>
                                <dt>TEL</dt>
                                <dd>{user.phone}</dd>
                                <dt>会社名</dt>
                                <dd>{user.company.name}</dd>
                                <dt>WEB</dt>
                                <dd>{user.website}</dd>
                        </SDl>
                </Card>
        );
});

// text-align: left;
        // <dl> 内のテキストを左揃えにする
// float: left;
        // <dt> を左に寄せ、テキストの流れから外し、<dd> と並べて表示することができる
// overflow-wrap: break-word;
        // <dd> 内のテキストが長すぎる場合、単語の途中で改行し、内容を表示できるようにする
const SDl = styled.dl`
        text-align: left;
        margin-bottom: 0;
        dt {
                float: left;
        }
        dd {
                padding-left: 32px;
                padding-bottom: 8px;
                overflow-wrap: break-word;
        }
`

// prop-typesを使ってchildrenを検証する
import PropTypes from 'prop-types';
UserCard.propTypes = {
        user: PropTypes.node,
        isAdmin: PropTypes.node
};
