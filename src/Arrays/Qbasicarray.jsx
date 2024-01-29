export const QbasicprintArray = [
  {
    id: 1,
    ques: "Write programme in QBASIC to display sum of 5 and 10.",
    Code: `CLS
    A=5
    B=10
    C=A+B
    PRINT "Sum of the numbers is ";C 
    END`,
  },
  {
    id: 2,
    ques: "Write programme in QBASIC to display sum of any two numbers.",
    Code: `CLS 
    INPUT "Give two number";A,B
    C=A+B
    PRINT "sum of the numbers is ";C
    END`,
  },
  {
    id: 3,
    ques: "Write a programme in QBASIC to give any three number then display their average.",
    Code: `CLS
    INPUT "Give any three numbers";A,B,C
    Average = (A+B+C)/3
    PRINT "Average of these three numbers is ";Average
    END`,
  },
  {
    id: 4,
    ques: "Write a programme in QBASIC to give any value for Principal, rate and time then display simple interest.",
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
    ques: "Write a programme in QBASIC to give any three number then display their Sum , Average and product.",
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
    ques: "Write a programme in QBASIC to give any two number then display highest value.",
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
    ques: "Write a programme in QBASIC to give any three number, then display highest value",
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
    ques: "Write a programme in QBASIC to give marks of three subject then print Total Marks, Percentage and Remarks",
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
];
