import java.lang.*;
import java.util.Scanner;

class Expression
{
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		int length,breadth,height;
		int totalArea,volume;
		byte _byte=5;

		System.out.println("Enter lenght breath and height");
		length=sc.nextInt();
		breadth=sc.nextInt();
		height=sc.nextInt();

		totalArea=2*(length*breadth+length*height+breadth*height);
	
		volume=length*breadth*height;

		System.out.println("Total Area "+totalArea);
		System.out.println("Volume "+volume);
		System.out.println("Byte "+_byte);

		

	}
}