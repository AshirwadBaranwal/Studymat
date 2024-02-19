export const QbasicprintArray = [
  {
    id: 1,
    ques: "Write a program in QBASIC to display sum of 5 and 10.",
    Code: `CLS
    A=5
    B=10
    C=A+B
    PRINT "Sum of the numbers is ";C 
    END`,
  },
  {
    id: 2,
    ques: "Write a program in QBASIC to display sum of any two numbers.",
    Code: `CLS 
    INPUT "Give two number";A,B
    C=A+B
    PRINT "sum of the numbers is ";C
    END`,
  },
  {
    id: 3,
    ques: "Write a program in QBASIC to give any three number then display their average.",
    Code: `CLS
    INPUT "Give any three numbers";A,B,C
    Average = (A+B+C)/3
    PRINT "Average of these three numbers is ";Average
    END`,
  },
  {
    id: 4,
    ques: "Write a program in QBASIC to give any value for Principal, rate and time then display simple interest.",
    Code: `CLS
    INPUT "Principal(in Rs.)";P
    INPUT "Rate(Yearly)";R
    INPUT "Time(in Years)";T
    SI=(P*R*T)/100
    PRINT "Simple Interest is ";SI
    END`,
  },
  {
    id: 5,
    ques: "Write a program in QBASIC to give any three number then display their Sum , Average and product.",
    Code: `CLS
    INPUT "Give three numbers";A,B,C
    Sum=(A+B+C)
    Average=Sum/3
    Product=(A*B*C)
    PRINT "Sum of three numbers is ";Sum
    PRINT "Average of three numbers is ";Average
    PRINT "Product of three numbers is ";Product
    END`,
  },
  {
    id: 6,
    ques: "Write a program in QBASIC to give any two number then display highest value.",
    Code: `CLS
    INPUT "Give any two numbers";A,B
    IF A>B THEN
      PRINT "Highest Number is ";A
      ELSE
      PRINT "Highest Number is ";B
      END IF
    END`,
  },
  {
    id: 7,
    ques: "Write a program in QBASIC to give any three number, then display highest value",
    Code: `CLS
    INPUT "Give any three unique numbers";A,B,C
    IF A>B AND A>C THEN
      PRINT "Highest No. is ";A
      ELSE
      IF B>A AND B>C THEN
        PRINT "Highest no. is ";B
        ELSE
        PRINT "Highest no. is ";C
        END IF
      END IF
    END`,
  },
  {
    id: 8,
    ques: "Write a program in QBASIC to give marks of three subject then print Total Marks, Percentage and Remarks",
    Code: `CLS
    INPUT "Marks in 1st subject";A
    INPUT "Marks in 2nd subject";B
    INPUT "Marks in 3rd subject";C
    TM=(A+B+C)
    P=(TM/300)*100
    PRINT "Total Marks=";TM
    PRINT "Percentage=";P
    IF P>0 AND P<=30 THEN
      PRINT "You are Fail"
      ELSE
      IF P>30 AND P<=50 THEN
         PRINT "Your grade is C"
      ELSE
        IF P>50 AND P<=75 THEN
         PRINT "Your grade is B"
      ELSE
        IF P>75 AND P<=85 THEN
         PRINT "Your grade is A"
            ELSE 
            PRINT "Your grade is A+"
        END IF
      END IF
      END IF
      END IF
    END`,
  },
  {
    id: 9,
    ques: "Write a program in QBASIC to generate natural numbers series up to 100.",
    Code: `CLS 
    FOR I= 1 TO 100
      PRINT I
      NEXT I
    END`,
  },
  {
    id: 10,
    ques: "Write a program in QBASIC to generate even numbers series from 2 to 100.",
    Code: `CLS 
    FOR I= 2 TO 100 STEP 2
      PRINT I
      NEXT I
    END`,
  },
  {
    id: 11,
    ques: "Write a program in QBASIC to generate odd numbers series from 1 to 100.",
    Code: `CLS  
    FOR I = 1 TO 99 STEP 2
     PRINT I
     NEXT I
   END`,
  },
  {
    id: 12,
    ques: "Write a program in QBASIC to generate table of 5.",
    Code: `CLS  
    FOR I = 5 TO 50 STEP 5
     PRINT I
     NEXT I
   END`,
  },
  {
    id: 13,
    ques: "Write a program in QBASIC to ask a number from user and then generate table of that number .",
    Code: `CLS  
    INPUT "Give a number";N
    FOR I = N TO N*10 STEP N
     PRINT I
     NEXT I
   END`,
  },
  {
    id: 14,
    ques: " Write a program in QBASIC to generate the following series-  1, 4, 9, 16, ........., 100.",
    Code: `CLS  
    FOR I = 1 TO 10
    PRINT I*I
    NEXT I
   END`,
  },
  {
    id: 15,
    ques: " Write a program in QBASIC to generate the following series-  1, 8, 27, 64, ........., 1000.",
    Code: `CLS  
    FOR I = 1 TO 10
    K = I*I*I
    PRINT K
    NEXT I
   END`,
  },
  {
    id: 16,
    ques: " Write a program in QBASIC to generate the following series-  1, 8, 27, 64, ........., 1000.",
    Code: `CLS  
    FOR I = 1 TO 10
    K = I*I*I
    PRINT K
    NEXT I
    END`,
  },
  {
    id: 17,
    ques: " Write a program in QBASIC to generate the following series-  2, 9, 28, 65, ........., upto 10 terms.",
    Code: `CLS  
    FOR I = 1 TO 10  
    K = (I*I*I)+1
    PRINT K
    NEXT I
    END`,
  },
  {
    id: 18,
    ques: " Write a program in QBASIC to give any name and then print that name 10 times.",
    Code: `CLS
    INPUT "give me a name";K
    FOR I=1 TO 10
      PRINT K
      NEXT I
    END`,
  },
  {
    id: 19,
    ques: " Write a program in QBASIC to give any number and then find its factorial.",
    Code: `CLS
INPUT "Enter a Number: ", n
fact = 1
FOR i = 1 TO n
    fact = fact * i
NEXT i
PRINT "Factorial of ";n;" is ";fact
END`,
  },
  {
    id: 20,
    ques: " Write a program in QBASIC to give factorial value of 1 to 10 numbers.",
    Code: `CLS
    FOR N = 1 TO 10
      FACT=1
      FOR I=1 TO N
        FACT = FACT*I
      NEXT I
      PRINT "Factorial of ";N;" is ";FACT
    NEXT N
    END`,
  },
  {
    id: 21,
    ques: " Write a program in QBASIC to give any base and power then  display their calculative value.",
    Code: `CLS
    INPUT "Give value of base";B
    INPUT "Give value of power";P
    K=1
    FOR i = 1 TO P
      K=K*B
      NEXT i
      PRINT "Calculative value = "; K
    END`,
  },
  {
    id: 22,
    ques: " Write a program in QBASIC to generate fibonacci number series upto 100.(Fibonacci series upto 10 terms is: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,....)",
    Code: `CLS
    a=0
    b=1
    PRINT a
    PRINT b
    FOR I= 1 TO 100
      c = a+b
      a=b
       b=c
      IF c > 100 THEN
        END
      END IF
      PRINT c
      NEXT I
    END`,
  },
  {
    id: 23,
    ques: " Write a program in QBASIC to generate Natural number series upto n terms and lastly print their Sum.",
    Code: `CLS
    INPUT "Give any natural no.";N
    K=0
    FOR i = 1 TO N
     PRINT i
      K=K+i
      NEXT i
    PRINT "Sum of ";N;" Consecutive natural no. is "; K
    END`,
  },
  {
    id: 24,
    ques: "Write a program in QBASIC to generate table of 1 to 10.",
    Code: `CLS 
    FOR I=1 TO 10
      FOR J= 1 TO 10
        K=I*J
        PRINT K;
        PRINT
        NEXT J
      PRINT
      NEXT I
    END`,
  },
  {
    id: 25,
    ques: " Write a program in QBASIC to give any no. then check that is odd or even.",
    Code: `CLS
    INPUT "Give a number";C
    K= C MOD 2
    IF K=0 THEN 
      PRINT C;" is an even number."
      ELSE 
      PRINT C;" is an odd number."
      END IF 
    END`,
  },
  {
    id: 26,
    ques: " Write a program in QBASIC to generate prime number series upto 100.",
    Code: `CLS
    FOR I = 2 TO 100
      PRIME=5
      FOR J = 2 TO I-1
        IF (I MOD J) = 0 THEN
          PRIME = 0
        END IF
      NEXT J
      IF PRIME=5 THEN
        PRINT I
      END IF
    NEXT I
    END`,
  },
  {
    id: 27,
    ques: "Write a program in QBASIC to generate",
    Qimg: "QBASIC27.png",
    Code: `CLS
    FOR I=1 TO 5
      FOR J=1 TO I
    PRINT "*";
        NEXT J
      PRINT
      NEXT I
    END`,
  },
  {
    id: 28,
    ques: "Write a program in QBASIC to generate following pattern-",
    Qimg: "QBASIC28.png",
    Code: `CLS
    FOR I = 1 TO 5
      FOR J = 1 TO I
        PRINT J;
        NEXT J
      PRINT
      NEXT I 
    END`,
  },
  {
    id: 29,
    ques: "Write a program in QBASIC to generate following pattern-",
    Qimg: "QBASIC29.png",
    Code: `CLS
    FOR I = 5 TO 1 STEP -1
      FOR J = 1 TO I
        PRINT J;
        NEXT J
      PRINT
      NEXT I 
    END`,
  },
  {
    id: 30,
    ques: "Write a program in QBASIC to generate following pattern-",
    Qimg: "QBASIC30.png",
    Code: `CLS
    FOR I = 5 TO 1 STEP -1
      FOR J = 5 TO I STEP -1
        PRINT J;
        NEXT J
      PRINT
      NEXT I 
    END`,
  },
  {
    id: 31,
    ques: "Write a program in QBASIC to generate following pattern-",
    Qimg: "QBASIC31.png",
    Code: `CLS
    FOR I = 1 TO 5
      FOR J = 5 TO I STEP -1
        PRINT J;
        NEXT J
      PRINT
      NEXT I 
    END`,
  },
  {
    id: 32,
    ques: `Write a program in QBASIC to generate following pattern-  `,
    Qimg: "QBASIC32.png",
    Code: `CLS
    FOR I = 1 TO 5
      FOR J = 1 TO I
        IF I = 2 OR I = 4 THEN
          PRINT "?";
          ELSE 
          PRINT "*";
          END IF
        NEXT J
      PRINT 
      NEXT I
    END`,
  },
  {
    id: 33,
    ques: `Write a program in QBASIC to generate following pattern-  `,
    Qimg: "QBASIC33.png",
    Code: `CLS
    FOR I=1 TO 5
      FOR J=1 TO 5-I 
        PRINT " ";
        NEXT J
      FOR K= 1 TO I
        PRINT K;
        NEXT K
      PRINT
      NEXT I
    END`,
  },
  {
    id: 34,
    ques: `Write a program in QBASIC to generate following pattern-  `,
    Qimg: "QBASIC34.png",
    Code: `CLS
    FOR I = 5 TO 1 STEP -1
      FOR J = 1 TO 5 - I
        PRINT " ";
        NEXT J
      FOR K = 1 TO I
        PRINT K;
        NEXT K
      PRINT
      NEXT I
    END`,
  },
  {
    id: 35,
    ques: `Write a program in QBASIC to generate following pattern-  `,
    Qimg: "QBASIC35.png",
    Code: `CLS
    FOR I= 1 TO 5
      FOR P = 1 TO 5-I
        PRINT " ";
      NEXT P      
      FOR J = 1 TO (I*2)-1
        PRINT J;
        NEXT J
     PRINT
      NEXT I
    END`,
  },
  {
    id: 36,
    ques: `Write a program in QBASIC to generate following pattern-  `,
    Qimg: "QBASIC36.png",
    Code: `CLS
    FOR I=1 TO 5
      FOR J=1 TO 5-I 
        PRINT "*";
        NEXT J
      FOR K= 1 TO I
        PRINT K;
        NEXT K
      PRINT
      NEXT I
    END`,
  },
  {
    id: 37,
    ques: `Write a program in QBASIC to generate following pattern-  `,
    Qimg: "QBASIC37.png",
    Code: `CLS
    FOR I = 5 TO 1 STEP -1
      FOR J = 1 TO 5 - I
        PRINT " ";
        NEXT J
      FOR K = 1 TO I
        PRINT "*";
        NEXT K
      PRINT
      NEXT I
    END`,
  },
  {
    id: 38,
    ques: `Write a program in QBASIC to generate following pattern-  `,
    Qimg: "QBASIC38.png",
    Code: `CLS
    FOR I= 1 TO 5
      FOR P = 1 TO 5-I
        PRINT "*";
      NEXT P      
      FOR J = 1 TO (I*2)-1
        PRINT J;
        NEXT J
     PRINT
      NEXT I
    END`,
  },
  {
    id: 39,
    ques: `Write a program in QBASIC to give any number then find that it is a prime number or not.`,
    Code: `CLS
    INPUT "GIVE A NUMBER";A
    PRIME = 1
    FOR I = 2 TO A-1
      IF A MOD I = 0 THEN
        PRIME = 0
        END IF
      NEXT I 
    IF PRIME = 1 THEN 
      PRINT A;" IS PRIME NUMBER. "
      ELSE 
      PRINT A;" IS NOT PRIME NUMBER. "
      END IF
    END`,
  },
  {
    id: 40,
    ques: `Write a program in QBASIC to generate natural number series up to 100 by using while statement.`,
    Code: `CLS
    I=0
    WHILE I < 100 
      I = I + 1
      PRINT I
      WEND
    END`,
  },
  {
    id: 41,
    ques: `Write a program in QBASIC to generate odd number series upto 99 by using while statement.`,
    Code: `CLS
    I = -1
    WHILE I < 99
      I = I + 2
      PRINT I
      WEND
    END`,
  },
  {
    id: 42,
    ques: `Write a program in QBASIC to generate the table of 5 by using while statement.`,
    Code: `CLS
    I=5
    WHILE I <= 50 
      PRINT I
      I = I + 5 
      WEND 
    END`,
  },
  {
    id: 43,
    ques: `Write a program in QBASIC to generate the table of any number by using while statement.`,
    Code: `CLS
    INPUT "Give a number";N
    I = O
    WHILE I < 10
     I = I + 1
     K = I * N
      PRINT K
      WEND 
    END`,
  },
  {
    id: 44,
    ques: `METHOD-2: Write a program in QBASIC to generate the table of any number by using while statement.`,
    Code: `CLS
    INPUT "Give a number";A
    P = A
    WHILE A <= P*10 
      PRINT A
      A = A + P 
      WEND 
    END`,
  },
  {
    id: 45,
    ques: `Write a program in QBASIC to generate the factorial value of numbers from 1 to 10 by using while statement.`,
    Code: `CLS
    F = 1
    I = 0
    WHILE I < 10
      I = I + 1
      F = F * I
      PRINT F
      WEND
    END`,
  },
  {
    id: 46,
    ques: `Write a program in QBASIC to generate table of numbers from 1 to 10 by using while statement.`,
    Code: `CLS
    I = 0
    WHILE I<10
      I = I + 1
      F = 0
      WHILE F < 10 
        F = F + 1
        K = I * F
        PRINT K;" ";
        WEND
      PRINT
      WEND
    END`,
  },
  {
    id: 47,
    ques: `Write a program in QBASIC to give any number then display reverse of that number.`,
    Code: `CLS
    INPUT "Give any number";N
    M = O
    WHILE N > 0
      K = N MOD 10
      M = (M*10) +K
      N = INT(N / 10)
      WEND 
    PRINT "Reverse is ";M
    END`,
  },
  {
    id: 48,
    ques: `Write a program in QBASIC to give any number then display that it is palindrome or not?(palindrome means - a number which is equal to it's reverse.).`,
    Code: `CLS
    INPUT "Give any number";N
    L = N
    M = O
    WHILE N > 0
      K = N MOD 10
      M = (M*10) +K
      N = INT(N / 10)
      WEND
    IF L = M THEN
      PRINT "It is a palindrome number."
      ELSE
      PRINT "It is not a palindrome number."
    END IF
    END`,
  },
];
