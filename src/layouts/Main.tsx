import Stats from "./components/Stats";
import TopNav from "./components/TopNav";
import FadeIn from "react-fade-in";

const Main: React.FC<any> = ({ children, page }) => {
    return (
        <section className={`main-layout ${page.toLowerCase()}-page`}>
            <header>
                <TopNav />
                <Stats />
            </header>
            <FadeIn className="main-layout__content">
                {children}
            </FadeIn>
        </section>
    );
}
 
export default Main;