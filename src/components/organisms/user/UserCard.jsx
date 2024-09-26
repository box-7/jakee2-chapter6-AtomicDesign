import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
        const { user } = props;
        return (
                <Card>
                        {/* <img height={160} width={160} src={user.image} alt={user.name}  />
                        <p>{user.name}</p> */}
                        <UserIconWithName image={user.image} name={user.name} />
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
};

const SDl = styled.dl`
        text-align: left;
        margin-bottom: 0;
        dt {
                float: left;
        }
        dd {
                padding-left: 32px;
                padding-bottom: 8px;
                // はみ出すことがなくなる
                overflow-wrap: break-word;
        }
`