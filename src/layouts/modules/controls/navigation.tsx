import { Text } from "@mantine/core";
import { shuffleText } from "../../../utils/utils";

interface NavigationPageProps {
    handleClickEnter: any;
    styles?: any;
}

export default function Pages({
    handleClickEnter,
    styles,
}: NavigationPageProps) {
    return (
        <div
            style={{
                position: "relative",
                height: 249,
                padding: 8,
                paddingTop: 25,
                paddingLeft: 30,
                ...styles,
            }}>
            <Text
                style={{
                    position: "absolute",
                    top: 7,
                    left: 10,
                }}>
                SITE MAP
            </Text>
            <AboutSvg onMouseDown={handleClickEnter} />
            <PlaygroundsSvg onMouseDown={handleClickEnter} />
            <ProjectsSvg onMouseDown={handleClickEnter} />
            <GallerySvg onMouseDown={handleClickEnter} />
            <ContactsSvg onMouseDown={handleClickEnter} />
            <TreeSvg />
        </div>
    );
}

interface SvgProps {
    onMouseDown: any;
}

const ProjectsSvg = ({ onMouseDown }: SvgProps) => {
    return (
        <div
            onMouseDown={() => onMouseDown("/projects")}
            onMouseEnter={(e) => shuffleText(e, "MEM0RIES")}
            className="tree-node"
            style={{
                position: "absolute",
                top: "113px",
                right: "10px",
            }}>
            MEM0RIES
        </div>
    );
};

const GallerySvg = ({ onMouseDown }: SvgProps) => {
    return (
        <div
            onMouseDown={() => onMouseDown("/g")}
            onMouseEnter={(e) => shuffleText(e, "WRITINGS")}
            className="tree-node"
            style={{
                position: "absolute",
                top: "25px",
                right: "7px",
                transform: "rotate(-45deg)",
            }}>
            WRITINGS
        </div>
    );
};

const PlaygroundsSvg = ({ onMouseDown }: SvgProps) => {
    return (
        <div
            onMouseDown={() => onMouseDown("/p")}
            onMouseEnter={(e) => shuffleText(e, "PLAYGR0UND")}
            className="tree-node"
            style={{
                position: "absolute",
                top: "60px",
                right: "70px",
                transform: "rotate(45deg)",
            }}>
            PLAYGR0UND
        </div>
    );
};

const AboutSvg = ({ onMouseDown }: SvgProps) => {
    return (
        <div
            onMouseDown={() => onMouseDown("/a")}
            onMouseEnter={(e) => shuffleText(e, "AB0UT")}
            className="tree-node"
            style={{
                position: "absolute",
                top: "150px",
                left: "8px",
            }}>
            AB0UT
        </div>
    );
};

const ContactsSvg = ({ onMouseDown }: SvgProps) => {
    return (
        <div
            onMouseDown={() => onMouseDown("/c")}
            onMouseEnter={(e) => shuffleText(e, "CONTACTS")}
            className="tree-node"
            style={{
                position: "absolute",
                top: "157px",
                left: "65px",
            }}>
            C0NTACTS
        </div>
    );
};

const TreeSvg = () => {
    return (
        <svg
            height="218"
            viewBox="0 0 156 238"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
                x1="76.092"
                y1="233.007"
                x2="50.4286"
                y2="207.344"
                stroke="black"
            />
            <line
                x1="50.4286"
                y1="200.928"
                x2="1.24049"
                y2="151.74"
                stroke="black"
            />
            <line
                x1="133.458"
                y1="63.8585"
                x2="79.993"
                y2="10.3932"
                stroke="black"
            />
            <line
                x1="114.587"
                y1="185.958"
                x2="88.9237"
                y2="160.294"
                stroke="black"
            />
            <line x1="50.5" y1="214" x2="50.5" y2="182" stroke="black" />
            <line x1="50.5" y1="214" x2="50.5" y2="182" stroke="black" />
            <line x1="114.5" y1="201" x2="114.5" y2="127" stroke="black" />
            <line x1="133.5" y1="103" x2="133.5" y2="52" stroke="black" />
            <line
                x1="76.092"
                y1="232.3"
                x2="114.587"
                y2="193.805"
                stroke="black"
            />
            <line
                x1="133.646"
                y1="89.1118"
                x2="148.646"
                y2="74.1118"
                stroke="black"
            />
            <line
                x1="114.587"
                y1="149.963"
                x2="144.528"
                y2="120.023"
                stroke="black"
            />
            <circle cx="76.5" cy="232.5" r="5.5" fill="#D9D9D9" />
            <circle cx="115" cy="132" r="5" fill="#C82749" />
            <circle cx="150.5" cy="71.5" r="5.5" fill="#C82749" />
            <line
                x1="88.6464"
                y1="19.1118"
                x2="98.2702"
                y2="9.48802"
                stroke="black"
            />
            <line
                x1="111.646"
                y1="41.2702"
                x2="121.27"
                y2="31.6464"
                stroke="black"
            />
            <circle cx="101.688" cy="5.5" r="5.5" fill="#C82749" />
            <line
                x1="114.587"
                y1="173.488"
                x2="124.211"
                y2="163.864"
                stroke="black"
            />
            <ellipse cx="127.5" cy="161" rx="5.5" ry="5" fill="#C82749" />
            <circle cx="50.5" cy="179.5" r="5.5" fill="#C82749" />
            <line x1="9" y1="176.5" x2="26" y2="176.5" stroke="black" />
            <line x1="76" y1="75.5" x2="134" y2="75.5" stroke="black" />
            <circle cx="7" cy="176" r="5" fill="#C82749" />
            <line x1="9" y1="176.5" x2="26" y2="176.5" stroke="black" />
            <line
                x1="50.6464"
                y1="194.667"
                x2="55.6464"
                y2="189.667"
                stroke="black"
            />
            <circle cx="7" cy="176" r="5" fill="#C82749" />
            <circle cx="58" cy="188" r="3" fill="#C82749" />
            <line x1="140.5" y1="82" x2="140.5" y2="72" stroke="black" />
            <circle cx="140" cy="72" r="3" fill="#C82749" />
        </svg>
    );
};
