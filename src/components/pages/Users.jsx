import styled  from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom"; 

// 長さ10の空の配列を作成し、その keys() メソッドでイテレータを取得
// コレクション（配列、リストなど）の要素を順番に一つずつ取り出すための仕組み
const users = [...Array(10).keys()].map(((val) => {
        return {
                id: val,
                name: `じゃけぇ${val}`,
                image: "src/img/おばけ.jpg",
                email: "12345@example.com",
                phone: "090-1111-2222" ,
                company: {
                        name: "テスト株式会社"
                },
                website: "https://google.com",
        };
}));


// useLocation 
// React Router が提供するフックの一つで、現在のURLに関する情報を取得するためのもの
// state は、その情報の中の、URLに紐づいた追加データのこと
// このコード は、現在のURLに紐づいた追加データを、state という変数に代入している

export const Users = () => {
        const { state } = useLocation();
        const isAdmin = state ? state.isAdmin : false;

        return (
                <SContainer>
                        <h2>ユーザー一覧</h2>
                        <SearchInput />

                        <SUserArea>
                        {users.map((user) => (
                                <UserCard key={user.id} user={user} isAdmin={isAdmin} />
                        ))}
                        </SUserArea>

                </SContainer>
        );
};

// flex-direction: column;
// フレックスボックス内の要素を縦方向に並べる。
// align-items: center;
// フレックスボックス内の要素を縦方向の中央に揃える。
const SContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
`;

// grid-template-columns: グリッドの列に関する設定を指定する。
// repeat(): 指定したパターンを繰り返し、複数の列を作る。
// auto-fill: コンテンツに合わせて、可能な限り多くの列を作る。
// minmax(200px, 1fr): 各列の幅の最小値と最大値を指定。
        // 200px: 各列の最小幅。これより狭くならない。
        // 1fr: 残りのスペースを均等に分割。
        // つまり: コンテンツの量に合わせて、列の数が自動調整され、
        // 各列の幅は最小200pxを確保しつつ、残りのスペースを均等に分割される。
const SUserArea = styled.div`
        padding-top: 40px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 20px;
`;