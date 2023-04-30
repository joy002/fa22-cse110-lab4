A. Accessing the value of the name property in the student object:
   student.name

B. Accessing the value of the Grad Year property in the student object
   student['Grad Year']

C. Calling the function for the greeting property in the student object
   student.greeting()

D. Accessing the name property of the object in the Favorite Teacher property in student
   student['Favorite Teacher'].name

E. Access index zero in the array of the courseLoad property of the student object
   student.courseLoad[0]

Part 3: Arithmetic
‘3’ + 2
Output: 32
Reason: It convert 2 to the string '2', then concatenate '3' with '2'. We get 32 in String form.

‘3’ - 2
Output: 1
Reason: It convert '3' to the number 3, then take 3 minus 2. We get 1 in Number form.

3 + null
Output: 3
Reason: It convert null to the number 0, then take 3 plus 0. We get 3 in Number form.

‘3’ + null
Output: 3null
Reason: It conver null to the string 'null', then concatenate '3' with 'null'. We get 3null in String form. 

true + 3
Output: 4
Reason: It convert true to the number 1, then take 1 plus 3. We get 4 in Number form.

false + null
Output: 0
Reason: It convert false to the number 0, null to the number 0, then take 0 plus 0. We get 0 in Number form.

'3' + undefined
Output: 3undefined
Reason: It convert undefined to the string 'undefined', then concatenate '3' with 'undefined'. We get 3undefined in String form.

'3' - undefined
Output: NaN
Reason: Since minus(-) indicate arithmetic subtraction between two numerical values. It convert '3' to the number 3, then it try to convert undefined to a numerical value, but failed. Therefore, the result is NaN.

Part 4: Comparison
‘2’ > 1
Output: true
Reason: It convert '2' to the number 2, then compare "if 1 is smaller than 2" or the other way if 2 is greater than 1". We get true.

‘2’ < ‘12’
Output: false
Reason: When comparing two strings, javascript compare them in "lexicographical" order, which means it compare letter by letter. In this case '2' is greater than '1' from '12'. Therefore, we get false.

2 == ‘2’
Output: true
Reason: It convert '2' to the number 2, then compare "if 2 is equal to 2". We get true.

2 === ‘2’
Output: false
Reason: It does not do any conversion, since 2 is a number and '2' is a string, === compared and then return false because they are different types.

true == 2
Output: false
Reason: It convert true to the number 1, then compare "if 1 is equal to 2". We get false.

true === Boolean(2)
Output: true
Reason: For Boolean(x), if x has any valid value, it's true. Else, it's false. In this case(Boolean(2)), 2 is a valid value. Therefore, Boolean(2) is true. We compare true with true. Since they have the same type, boolean, and are both true, we get true.

Part 5: Explain the difference between the == and === operators.
==, non-strict equality operator, compare the equality of two variable after any neccessary conversion.
===, strict equality operator, checks the equality without any type conversion.

Part 6: Loops

