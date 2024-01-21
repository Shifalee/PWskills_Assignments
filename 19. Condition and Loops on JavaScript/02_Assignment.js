/*Write a program that grades students based on their marks.
1. if greater than 90 then A Grade 
2.if between 70 and 90 then a B Grade 
3.if between 50 and 70 then a C grade 
4.Below 50 then an F grade 
*/
const Grade=100;
if(Grade>90)
{
    console.log("A Grade");
}
else if(Grade<90 && Grade>70)
{
    console.log("B Grade");
}
else if(Grade<70 && Grade>50){
    console.log("C Grade");
}
else if(Grade<50)
{
    console.log("F Grade");
}