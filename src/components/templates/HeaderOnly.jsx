import { Header } from "../atoms/layout/Header";

export const Headeronly = (props) => {
        const { children } = props;
        return (
                <>
                        <Header />
                        {children}
                </>
        );
};