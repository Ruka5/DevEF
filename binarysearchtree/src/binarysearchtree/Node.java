package binarysearchtree;

// storage container that the stored numbers goes
public class Node {	// is the node in the binary search tree

	public int key;
	public String value;
	
	public Node(int key, String value) {
		this.key = key;
		this.value = value;
	}
	
	public Node leftChild, rightChild;

	@Override
	public String toString() {
		return "Node [key=" + key + ", value=" + value + ", leftChild=" + leftChild + ", rightChild=" + rightChild
				+ "]";
	}
	
}
