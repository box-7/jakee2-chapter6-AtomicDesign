// BrowserRouter
        // アプリケーションのルートとして配置: 通常、アプリケーションの最上位コンポーネントに配置する
// Switch
        // 複数のRouteコンポーネントの中から、最初にマッチするルートのみをレンダリングする
// Routeコンポーネント:
        // BrowserRouterの中にRouteコンポーネントを配置し、各ルート（URLパターン）と対応するコンポーネントを定義
// URLの変更:
        // ユーザーがURLを変更すると、BrowserRouterがその変更を検知し、定義されたルートと照合する
// コンポーネントのレンダリング:
        // 一致するルートが見つかると、そのルートに対応するコンポーネントがレンダリングされる

// package.jsonのreact-router-domは、6ではなく5にする必要があった "react-router-dom": "^5.2.0",

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Top } from '../components/pages/Top';
import { Users } from '../components/pages/Users';
import { DefaultLayout } from '../components/templates/DefaultLayout';

export const Router = () => {
        return (
                <BrowserRouter>
                        <Switch>
                                <Route exact path="/">
                                        <DefaultLayout>
                                                <Top />
                                        </DefaultLayout>
                                </Route>
                                <Route path="/users">
                                        <DefaultLayout>
                                                <Users />
                                        </DefaultLayout>
                                </Route>
                        </Switch>
                </BrowserRouter>
        );
};