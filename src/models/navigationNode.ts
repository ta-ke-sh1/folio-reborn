export class NavigationNode {
   name: string = "root";
   connectionNode: NavigationNode[] = [];

   constructor( name?: string,  connectionNode: NavigationNode[] = []) {
       if (name) {
           this.name = name;
       }

       if (connectionNode) {
           this.connectionNode = connectionNode;
       }
   }
}
