const CquesArray = [
  {
    id: 1,
    Ques: "1. Write a C program to print Hello world! .",
    Answer: `
    #include <stdio.h>
      int main( ){
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
      int main( ){
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
    int main( )
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
    int main( )
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
  {
    id: 5,
    Ques: "5. Write a C program to find compound interest.",
    Answer: `#include <stdio.h>
    #include <math.h>
    
    int main( ) {
       float principal, rate, time, CI;
       printf("Enter the pricipal amount:");
       scanf("%f",&principal);
       printf("Enter the time period:");
       scanf("%f",&time);
       printf("Enter the rate:");
       scanf("%f",&rate);
       CI = principal*(pow((1+rate/100),time)-1);
       printf("Compound interest is %f",CI);
        return 0;
    }`,
    Output:
      "Enter the pricipal amount:1000000<br>Enter the time period:5<br>Enter the rate:6<br>Compound interest is 338225.218750",
    Image: "",
  },
  {
    id: 6,
    Ques: "6. Write a C program to find perimeter and area of a circle.",
    Answer: `#include <stdio.h>

    int main( ) {
      float radius, perimeter, area;
      printf("Enter the value of radius:");
      scanf("%f",&radius);
      perimeter = 2 * 3.14 * radius;
      area = 3.14 * radius * radius;
      printf("Area = %f and perimeter =%f",area,perimeter);
        return 0;
    }`,
    Output:
      "Enter the value of radius: 1<br>Area = 3.140000 and perimeter =6.280000",
    Image: "",
  },
  {
    id: 7,
    Ques: "7. Write a C program to find perimeter and area of a rectangle.",
    Answer: `#include <stdio.h>

    int main() {
        float l, b, area, perimeter;
        printf("Enter the length of rectangle: ");
        scanf("%f",&l);
        printf("Enter the breadth of rectangle: ");
        scanf("%f",&b);
    area = l * b;
        perimeter = 2*(l+b);
        printf("Area = %f and perimeter = %f",area,perimeter);
        return 0;
    }`,
    Output:
      "Enter the length of rectangle: 2<br>Enter the breadth of rectangle: 2<br>Area = 4.000000 and perimeter = 8.000000",
    Image: "",
  },
  {
    id: 8,
    Ques: "8. Write a C program to find perimeter and area of a square.",
    Answer: `#include <stdio.h>

    int main() {
        float l, b, area, perimeter;
        printf("Enter the length of rectangle: ");
        scanf("%f",&l);
        printf("Enter the breadth of rectangle: ");
        scanf("%f",&b);
    area = l * b;
        perimeter = 2*(l+b);
        printf("Area = %f and perimeter = %f",area,perimeter);
        return 0;
    }`,
    Output:
      "Enter the length of rectangle: 2<br>Enter the breadth of rectangle: 2<br>Area = 4.000000 and perimeter = 8.000000",
    Image: "",
  },
  {
    id: 9,
    Ques: "9. Write a C program to find perimeter and area of a triangle.",
    Answer: `#include <stdio.h>
    #include <math.h>
    int main()
    {
        float a, b, c, perimeter, s, area;
        printf("Enter three sides of triangle : \n");
        scanf("%f %f %f", &a, &b, &c);
        perimeter = a + b + c;
        s = (a + b + c) / 2;
        area = sqrt(s * (s - a) * (s - b) * (s - c));
        printf("perimeter =%f and area =%f ", perimeter, area);
        return 0;
    }
    `,
    Output:
      "Enter three sides of triangle :<br>3<br>4<br>5<br>perimeter =12.000000 and area =6.000000",
    Image: "",
  },
  {
    id: 10,
    Ques: "10. Write a C program to find odd or even number.",
    Answer: `#include <stdio.h>
    int main()
    {
        int a;
        printf("Enter a number: ");
        scanf("%d", &a);
        if (a % 2 == 0)
        {
            printf("Number is even.");
        }
        else
        {
            printf("Number is odd.");
        }
        return 0;
    }
    
    `,
    Output:
      "Enter three sides of triangle :<br>3<br>4<br>5<br>perimeter =12.000000 and area =6.000000",
    Image: "",
  },

  {
    id: 11,
    Ques: "11. Write a C program to find eligibility of voter.",
    Answer: `#include <stdio.h>

    int main() {
       int age;
       printf("Enter the age of voter : ");
       scanf("%d", &age);
       if(age >= 18)
       {
           printf("Voter is eligible.");
       }
    else
    {
        printf("voter is not eligible.");
    }
        return 0;
    }`,
    Output: "Enter the age of voter : 10<br>voter is not eligible.",
    Image: "",
  },
  {
    id: 12,
    Ques: "12. if the basic salary is less than 1500 then HRA = 10% of salary and ΔA = 90% of salary if basic salary is either equal or above 1500 then HRA = 500 and ΔA = 98% basic salary. If an employee basic salary is &input through keyboard. write a program to find gross salary.",
    Answer: `#include <stdio.h>

    int main()
    {
        float bs, hra, da, gs;
        printf("Enter the basic salary: ");
        scanf("%f", &bs);
        if (bs < 1500)
        {
            hra = (bs * 10) / 100;
            da = (bs * 90) / 100;
        }
        else
        {
            hra = 500;
            da = (bs * 98) / 100;
        }
        gs = bs + hra + da;
        printf("Gross salary = %f", gs);
        return 0;
    }
    `,
    Output: "Enter the basic salary: 1600<br>Gross salary = 3668.000000",
    Image: "",
  },
 
];

export default CquesArray;
