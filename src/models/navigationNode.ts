export class NavigationNode {
   name: string = "root";
   connectionNode: NavigationNode[] = [];
   isLeaf: boolean;

   constructor( name: string, isLeaf: boolean = true,  connectionNode: NavigationNode[] = []) {
       if (name) {
           this.name = name;
       }

       this.isLeaf = isLeaf

       if (connectionNode) {
           this.connectionNode = connectionNode;
       }

      
   }
}
