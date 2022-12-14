package binarysearchtree;

import java.util.Stack;

// majority of our code
public class BST {

	private Node root; // first top of the binary search tree

	public void insert(int key, String value) {

		Node newNode = new Node(key, value);

		if (root == null) {
			root = newNode;
		} else {

			Node current = root;
			Node parent;

			while (true) {
				parent = current;
				if (key < current.key) { // left side of the scenario
					current = current.leftChild;
					if (current == null) { // it's parent is the leaf node
						parent.leftChild = newNode;
						return;
					}
				} else { // right side
					current = current.rightChild;
					if (current == null) {
						parent.rightChild = newNode;
						return;
					}
				}
			}
		}

	}

	// find the minimum of the binary tree
	public Node findMin() {
		Node current = root;
		Node last = null;

		while (current != null) {
			last = current;
			current = current.leftChild;
		}
		return last;
	}

	// find max
	public Node findMax() {
		Node current = root;
		Node last = null;

		while (current != null) {
			last = current;
			current = current.rightChild;
		}
		return last;
	}

	public boolean remove(int key) {

		Node currentNode = root;
		Node parentNode = root;

		boolean isLeftChild = false;

		// Searching to find the node with the key to deleted
		while (currentNode.key != key) {
			parentNode = currentNode;
			if (key < currentNode.key) { // left child
				isLeftChild = true;
				currentNode = currentNode.leftChild;
			} else { // right child
				currentNode = currentNode.rightChild;
				isLeftChild = false;
			}
			if (currentNode == null) {
				return false;
			}
		}

		// we found the node
		Node nodeToDelete = currentNode;

		// if node is a leaf [Leaf Node = Node with no children] - only with no children
		// can be deleted
		if (nodeToDelete.leftChild == null && nodeToDelete.rightChild == null) {
			if (nodeToDelete == root) {
				root = null;
			} else if (isLeftChild) {
				parentNode.leftChild = null;
			} else {
				parentNode.rightChild = null;
			}
		}
		// if node has one child that is on the left
		else if (nodeToDelete.rightChild == null) {
			if (nodeToDelete == root) {
				root = nodeToDelete.leftChild;
			} else if (isLeftChild) {
				parentNode.leftChild = nodeToDelete.leftChild;
			} else {
				parentNode.rightChild = nodeToDelete.leftChild;
			}
		}
		// if node has one child that is on the right
		else if (nodeToDelete.leftChild == null) {
			if (nodeToDelete == root) {
				root = nodeToDelete.rightChild;
			} else if (isLeftChild) {
				parentNode.leftChild = nodeToDelete.rightChild;
			} else {
				parentNode.rightChild = nodeToDelete.rightChild;
			}
		}
		// if node has two children (tricky)
		else {

			Node successor = getSuccessor(nodeToDelete);

			// connect parent of nodeToDelete to successor instead
			if (nodeToDelete == root) {
				root = successor;
			} else if (isLeftChild) {
				parentNode.leftChild = successor;
			} else {
				parentNode.rightChild = successor;
			}

			// this is where the swap happens
			successor.leftChild = nodeToDelete.leftChild;

		}
		return true;
	}

	private Node getSuccessor(Node nodeToDelete) {
		Node successorParent = nodeToDelete;
		Node successor = nodeToDelete;

		Node current = nodeToDelete.rightChild; // go to the right child

		while (current != null) { // start going left down the tree until node has no left child
			successorParent = successor;
			successor = current;
			current = current.leftChild;
		}

		// if successor not a right child
		if (successor != nodeToDelete.rightChild) {
			successorParent.leftChild = successor.rightChild;
			successor.rightChild = nodeToDelete.rightChild;
		}
		return successor;
	}

	public void displayTree() {

		Stack<Node> globalStack = new Stack<Node>();
		globalStack.push(root);
		int nBlanks = 32;
		boolean isRowEmpty = false;
		System.out.println("......................................................");

		while (isRowEmpty == false) {
			Stack<Node> localStack = new Stack<Node>();
			isRowEmpty = true;
			for (int j = 0; j < nBlanks; j++) {
				System.out.print(" ");
			}

			while (globalStack.isEmpty() == false) {
				Node temp = globalStack.pop();
				if (temp != null) {
					System.out.print(temp.key);
					localStack.push(temp.leftChild);
					localStack.push(temp.rightChild);
					if (temp.leftChild != null || temp.rightChild != null) {
						isRowEmpty = false;
					}
				} else {
					System.out.print("--");
					localStack.push(null);
					localStack.push(null);
				}

				for (int j = 0; j < nBlanks * 2 - 2; j++) {
					System.out.print(" ");
				}
			}

			System.out.println();
			nBlanks = nBlanks / 2;

			while (localStack.isEmpty() == false)
				globalStack.push(localStack.pop());
		}
		System.out.println("......................................................");

	}

}
