
// アプリケーションのルートとして配置: 通常、アプリケーションの最上位コンポーネントにBrowserRouterを配置する
// Routeコンポーネント: BrowserRouterの中にRouteコンポーネントを配置し、各ルート（URLパターン）と対応するコンポーネントを定義
// URLの変更: ユーザーがURLを変更すると、BrowserRouterがその変更を検知し、定義されたルートと照合する
// コンポーネントのレンダリング: 一致するルートが見つかると、そのルートに対応するコンポーネントがレンダリングされる

import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { PrimaryButton } from './components/atoms/PrimaryButton';
import { SecondaryButton } from './components/atoms/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { Headeronly } from './components/templates/Headeronly';
import { DefaultLayout } from './components/templates/DefaultLayout';

export default function App() {
        const user = {
                name: "じゃけぇ",
                image: "src/img/おばけ.jpg",
                email: "12345@example.com",
                phone: "090-1111-2222" ,
                company: {
                        name: "テスト株式会社"
                },
                website: "https://google.com",
        };
  return (
        // <Router
        <BrowserRouter>
                <DefaultLayout>
                        <PrimaryButton>テスト</PrimaryButton>
                        <SecondaryButton>検索</SecondaryButton>
                        <br />
                        <SearchInput />
                        <UserCard user={user} />
                </DefaultLayout >
        </BrowserRouter>
  );
};
