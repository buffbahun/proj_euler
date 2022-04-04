# Project Euler

Time for a new project. This time I am going to solve problems in the project euler archive. For those who are wondering what the heck is this "project euler", this site contains a huge list of methematical, logical and algorithm related questions. These problems are allowed to do through computer programs. These problems get quite hard as we progress serially. So wish me best :D. In this doc I will provide my solutions and give detailed walkthrough. So you can follow along with me and solve these problems and we can learn from eachother through sharing the solutions. The url for this site I have listed below:

[Project Euler Archive Page](https://projecteuler.net/archives)

### Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.Find the sum of all the multiples of 3 or 5 below 1000.

After reading the question throughly, we can solve this problem by looping through the multiples of 3 and 5 below 1000. And sum those multiples. But we should be carefull about LCM(Lowest Common Multiple). Meaning, 3 and 5 have common multiples and the lowest among them is the LCM. In the case of 3 and 5 they have 15 as the first common multiple as 3 times 5 and 5 times 3 both gives this result and thus it is also the lowest common multiple among them. The reason behind why we need LCM is that the multiples of LCM, in our case multiples of 15(15,30,45,...) are repeated as both 3 and 5 prodduces this value, so to get the actual sum we should subtract the multiples of 15(LCM) less then 1000.

In the above code, I have implemented LCM algorithm using HCF algorithm. You can throughly understand the about LCM algorithm implementation.

As I said earlier we can loop the multiples of 3, 5 and 15(LCM) below 1000 and add thoes multip[les of 3 and 5 after substracting it from 15 multiples. But if we observer closer we dont even need to loop it. I will give you a example.

Multiples of 3 below 20:

3, 6, 9, 12, 15, 18

Now we can take 3 common from them as they are 3 multiples:

3 (1, 2, 3, 4, 5, 6)

As we have to sum we can replace "," with "+":

3 (1 + 2 + 3 + 4 + 5 + 6)

We can see inside the paranthesis that this is sum of natural numbers. As we know that the formula for sum of natural numbers for nth position is given by:

sum(n) = ( n * (n + 1) ) / 2

Now I think everything is clear. We can first find the nth term bellow 1000 for 3, 5 and 15(LCM). Calculate the sum of natural numbers upto nth position for each number 3, 5 and 15 from the above formula and multiply each calculated value with 3, 5 and 15 respectively. Finally we can sum value we got from 3 and 5 and then subtract the value from 15 with the result. Now we get the solution for this problem.

solution = 3 * sum(n for 3) + 5 * sum(n for 5) - 15 * sum(n for 15)

### Problem 2


