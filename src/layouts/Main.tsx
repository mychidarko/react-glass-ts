import Stats from "./components/Stats";
import TopNav from "./components/TopNav";
import FadeIn from "react-fade-in";

const Main: React.FC<any> = ({ children, page, className, headerTitle, headerContent }) => {
    return (
        <section className={`main-layout ${page.split(" ").join("-").toLowerCase()} ${className}`}>
            <header>
                <TopNav />
                <Stats title={headerTitle} content={headerContent}  />
            </header>
            <FadeIn className="main-layout__content">
                {children}
            </FadeIn>
        </section>
    );
}
 
export default Main;