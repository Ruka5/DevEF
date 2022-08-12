package binarysearchtree;

public class Application {

	public static void main(String[] args) {

		BST tree = new BST();
		tree.insert(10, "Ten");
		tree.insert(20, "Twenty");
		tree.insert(35, "Fifteen");
		tree.insert(1, "Ten");
		tree.insert(2, "Twenty");
		tree.insert(5, "Fifteen");
		tree.insert(100, "Ten");
		tree.insert(200, "Twenty");
		tree.insert(155, "Fifteen");
		tree.insert(101, "Ten");
		tree.insert(206, "Twenty");
		tree.insert(165, "Fifteen");
		tree.insert(140, "Ten");
		tree.insert(230, "Twenty");
		tree.insert(195, "Fifteen");
		
		System.out.println(tree.findMin().key);
		System.out.println(tree.findMax().key);
		
		System.out.println(tree.remove(10));	// print true
		
		System.out.println(tree.findMin().key);
		System.out.println(tree.findMax().key);
		
		tree.displayTree();
		
	}
}
