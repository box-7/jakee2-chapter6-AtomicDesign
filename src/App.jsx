// import './App.css'
import { RecoilRoot } from 'recoil';
import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';

export default function App() {
        return (
                <RecoilRoot>
                        <UserProvider>
                                <Router />
                        </UserProvider>
                </RecoilRoot>
        //         name: "じゃけぇ",

        );
};

        // const user = {
        //         image: "src/img/おばけ.jpg",
        //         email: "12345@example.com",
        //         phone: "090-1111-2222" ,
        //         company: {
        //                 name: "テスト株式会社"
        //         },
        //         website: "https://google.com",
        // };

        // <BrowserRouter>
        //         <DefaultLayout>
        //                 <PrimaryButton>テスト</PrimaryButton>
        //                 <SecondaryButton>検索</SecondaryButton>
        //                 <br />
        //                 <SearchInput />
        //                 <UserCard user={user} />
        //         </DefaultLayout >
        // </BrowserRouter>
