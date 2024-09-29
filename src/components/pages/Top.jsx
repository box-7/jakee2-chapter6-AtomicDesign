import React, { useContext } from "react";
import styled  from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
// import { UserContext } from "../../providers/UserProvider";
// import { useState } from "../../store/userState";

// recoilとuserStateをimportする
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

// useHistory は、React Routerが提供するフックで、ページ遷移をJavaScriptのコードで制御 するために使われる。
        // ボタンクリック時の遷移: ボタンを押したら別のページに移動
        // フォーム送信後の遷移: フォームを送信したら確認画面に移動
        // 条件分岐による遷移: ある条件によって、移動するページを変える
        // APIのレスポンスに基づいた遷移: サーバーから受け取ったデータによって、移動先を決める
export const Top = () => {
        const history = useHistory();
        // const { userState } = useContext(UserContext);

        // recoilを使って、userStateの値を更新するsetUserInfoを定義
        const setUserInfo = useSetRecoilState(userState);
        // useContextで、UserContextのsetUserInfoを取得

        // コンテキストの値が更新された時、その要素を参照しているコンポーネントは再レンダリングされる
        // const { setUserInfo } = useContext(UserContext);
        const onClickAdmin = () => {
                setUserInfo({ isAdmin: true });
                history.push("/users");
        };
        const onClickGeneral = () =>  {
                setUserInfo({ isAdmin: false });
                history.push("/users");
        };
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