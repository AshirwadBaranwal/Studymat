const CquesArray = [
  {
    id: 1,
    Ques: "1. Write a C program to print Hello world! .",
    Answer: `
    #include <stdio.h>
      int main(){
      printf("Hello World!");
      return 0;
    }
    `,
    Output: `Hello world!`,
    Image: "",
  },
  {
    id: 2,
    Ques: "2. Write a C program to find sum of two numbers.",
    Answer: `
    #include <stdio.h>
      int main(){
      int a,b,sum;
      printf("Enter two numbers: ");
      scanf("%d%d" , &a,&b);
      sum = a+b;
      printf("sum = %d " ,sum);
      return 0;
    }`,
    Output: "Enter two numbers: <br> 2 <br> 5 <br> sum = 7 ",
    Image: "",
  },
];

export default CquesArray;
