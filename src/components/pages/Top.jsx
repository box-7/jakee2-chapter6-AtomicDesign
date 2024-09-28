import styled  from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";

// useHistory は、React Routerが提供するフックで、ページ遷移をJavaScriptのコードで制御 するために使われる。
        // ボタンクリック時の遷移: ボタンを押したら別のページに移動
        // フォーム送信後の遷移: フォームを送信したら確認画面に移動
        // 条件分岐による遷移: ある条件によって、移動するページを変える
        // APIのレスポンスに基づいた遷移: サーバーから受け取ったデータによって、移動先を決める

export const Top = () => {
        const history = useHistory();

        const onClickAdmin = () => history.push({ pathname: "/users", state: { isAdmin: true } });
        const onClickGeneral = () => history.push({ pathname: "/users", state: { isAdmin: false } });

        return (
                <SContainer>
                        <h2>TOP page</h2>
                        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
                        <br /><br />
                        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>

                </SContainer>
        );
};

const SContainer = styled.div`
        text-align: center;
`;