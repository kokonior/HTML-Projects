#include <stdio.h>
#include <stdlib.h>

void main () {
  int a, b;

  // TAKE INPUT FROM USER
  printf("Enter first number: ");
  scanf(" %d", &a);

  printf("Enter second number: ");
  scanf(" %d", &b);

  // DISPLAY THE OUTPUT
  printf("\n\nResult for (+): %d", a + b);
  printf("\n\nResult for (-): %d", a - b);
  printf("\n\nResult for (*): %d", a * b);
  printf("\n\nResult for (/): %d", a / b);

  // Finish
  printf("\n\n\nThanks for using this program!\n");

}
