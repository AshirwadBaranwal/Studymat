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
  {
    id: 3,
    Ques: "3. Write a C program to find Simple interest.",
    Answer: `#include <stdio.h>
    int main()
    {
        int Principle, Rate, Time;
        float Interest;
        printf("Enter the value of Principle: ");
        scanf("%d", &Principle);
        printf("Enter the value of rate: ");
        scanf("%d", &Rate);
        printf("Enter the value of time: ");
        scanf("%d", &Time);
        Interest = (Principle * Rate * Time)/100.0;
        printf("Simple interest is %f", Interest);
        return 0;
    }`,
    Output:
      "Enter the value of Principle: 5000 <br>Enter the value of rate: 10<br>Enter the value of time: 2<br>Simple interest is 1000.000000",
    Image: "",
  },
  {
    id: 4,
    Ques: "4. Write a C program to find average of three numbers.",
    Answer: `#include <stdio.h>
    int main()
    {
        int n1,n2,n3;
        float avg;
        printf("Enter the value of three numbers :");
        scanf("%d%d%d",&n1,&n2,&n3);
        avg = (n1+n2+n3) / 3.0;
        printf("The average of  three numbers is %f", avg);
        return 0;
    }`,
    Output:
      "Enter the value of three numbers :50 <br> 30 <br> 20 <br> The average of  three numbers is 33.333332",
    Image: "",
  },
];

export default CquesArray;
