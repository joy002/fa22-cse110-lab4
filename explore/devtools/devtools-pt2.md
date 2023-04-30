1. What was the bug?
   The bug is that the program treat both inputs as string and not number. Therefore, when it do +, it concatenate two inputs and not adding the two input arithmetically. For example, if first number is 1 and second number is 10. The sum should be 11 in number, but with this bug, the sum becomes 110 in string.
   
2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)
   I would fix it by casting both input to Number to make sure the program do arithmetic add and not string concatenation.
   See image fix.png