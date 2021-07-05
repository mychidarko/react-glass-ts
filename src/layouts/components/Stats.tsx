import { showOnly } from "@/utils/app";
import { Link } from "glass-router";
import GlassX from "glassx";
import FadeIn from "react-fade-in";

const Stats: React.FC<any> = ({ title, content }) => {
    const defaultTitle = {
        lead: "Welcome",
        text: showOnly(17, GlassX.get("user")?.name || ""),
        extra: "Admin",
    };

    const defaultContent = [
        {
            lead: "Processed Orders",
            text: "34"
        },
        {
            lead: "Pending Orders",
            text: "4"
        },
        {
            lead: "Total Users Registered",
            text: "300"
        },
        {
            lead: "Total amount sold",
            text: "GHC 34,987"
        },
        {
            lead: "Total amount bought",
            text: "GHC 300"
        },
    ];

    if (!title) {
        title = defaultTitle;
    }

    if (!content) {
        content = defaultContent;
    }

    return (
        <div className="page-stats flex pt:_3 pb:_6 px:10">
            <div className="welcome__details w:25">
                {title && (
                    <>
                        <small>{title.lead}</small>
                        <h3>{title.text}</h3>
                        {title.extra && <h5>{title.extra}</h5>}
                    </>
                )}
            </div>
            <FadeIn className="details__container flex flex:center-between w:100 position:relative">
                {content && content.map(({ lead, text }: any, index: number) => (
                    <div className="details" key={lead}>
                        <p>{lead}</p>
                        <h3>{text}</h3>
                    </div>
                ))}
                {!title && (
                    <Link
                        to={{ name: "reports" }}
                        className="position:absolute right:0 view-reports"
                    >
                        View all reports
                    </Link>
                )}
            </FadeIn>
        </div>
    );
}
 
export default Stats;