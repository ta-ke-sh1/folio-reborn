import { NavigationNode } from "../../../models/navigationNode";

const node = new NavigationNode("root", [
    new NavigationNode("About"),
    new NavigationNode("Contact"),
]);

export default function Pages() {
    return (
        <div
            style={{
                height: 249,
                padding: 8,
            }}>
            {node.connectionNode.map((n: NavigationNode, index: number) => (
                <div key={`${n.name}-${index}`}>{n.name}</div>
            ))}
        </div>
    );
}
