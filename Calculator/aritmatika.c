#include <stdio.h>

void main () {
  // Make variabel for string and integer
  char opera, repeat;
  int a, b;

  // Greeting words XD
  printf("Welcome to smart calculator, enjoy!\n\n");

  // Get input a first number from user
  printf("Enter your first number: ");
  scanf(" %d", &a);

  // Get input a second number from user
  printf("Enter your second number: ");
  scanf(" %d", &b);

  // Get input a operator from user
  printf("\n\nEnter your operator to use\n");
  printf("+, -, *, / : ");
  scanf(" %c", &opera);


  // Show the operator output you input earlier
  printf("You entered this operator: %c\n ", opera);

  // Create a simple conditional algorithm with switch
  switch (opera) {
    case '+':
    printf("\nResult: %d", a + b);
    break;

    case '-':
    printf("Result: %d", a - b);
    break;

    case '*':
    printf("\nResult: %d", a * b);
    break;

    case '/':
    printf("\nResult: %d", a / b);
    break;

    default:
    printf("\n\nYou enter a wrong operator, try again!\n");
    cuk();
    break;
  }

  /* Asking to the user do you guys want to repeat this program or no?
  if you type 'y' the program will be looping, if you type 'n' the program will be end.*/
  printf("\n\nDo you want to repeat this program?\n");
  printf("Answer(y/n): ");
  scanf(" %c", &repeat);

  // Create a simple conditional with if elseif and else
  if(repeat == 'y') {
    cuk();
  } else if(repeat == 'n') {
    printf("\n\nThanks for using this program, have a good one!\n\n");
    printf("Made with a cup of coffe and tea, by rama.\n");
  } else {
    printf("\n\nI say, do you want to repeat this program?\n");
    printf("Answer(y/n): ");
    scanf(" %c", &repeat);

    /* I f*cked up the code, i'm sorry. But it's working. You can try it!.
    I just add some conditional again so as the code running normaly.
    It's can be cool if you guys make a clean conditional.*/
    if(repeat == 'y') {
      cuk();
    } else if(repeat == 'n'){
      printf("\n\nThanks for using this program, have a good one!\n\n");
    } while(repeat != 'y' && 'n') {
          printf("\n\nI say, do you want to repeat this program?\n");
          printf("Answer(y/n): ");
          scanf(" %c", &repeat);

          if(repeat == 'y') {
            cuk();
          } if(repeat == 'n'){
            printf("\n\nThanks for using this program, have a good one!\n\n");
            break;
      }
    }
  }
}

/* Another function without greeting welcome, like a earlier function. It's make them different.
Look the code in the bottom. I just re write this code from the first code or function when i make earlier.*/
void cuk () {
  char opera, repeat;
  int a, b;

  printf("\nEnter your first number: ");
  scanf(" %d", &a);

  printf("Enter your second number: ");
  scanf(" %d", &b);

  printf("\n\nEnter your operator to use\n");
  printf("+, -, *, / : ");
  scanf(" %c", &opera);

  printf("You entered this operator: %c\n ", opera);


  switch (opera) {
    case '+':
    printf("\nResult: %d", a + b);
    break;

    case '-':
    printf("Result: %d", a - b);
    break;

    case '*':
    printf("\nResult: %d", a * b);
    break;

    case '/':
    printf("\nResult: %d", a / b);
    break;

    default:
    printf("\n\nYou enter a wrong operator, try again!\n");
    cuk();
    break;
  }
  printf("\n\nDo you want to repeat this program?\n");
  printf("Answer(y/n): ");
  scanf(" %c", &repeat);

  if(repeat == 'y') {
    cuk();
  } else if(repeat == 'n') {
    printf("\n\nThanks for using this program, have a good one!\n\n");
  } else {
    printf("\n\nI say, do you want to repeat this program?\n");
    printf("Answer(y/n): ");
    scanf(" %c", &repeat);

    if(repeat == 'y') {
      cuk();
    } else if(repeat == 'n') {
      printf("\n\nThanks for using this program, have a good one!\n\n");
    } while (repeat != 'y' && 'n') {
        printf("\n\nI say, do you want to repeat this program?\n");
        printf("Answer(y/n): ");
        scanf(" %c", &repeat);

        if(repeat == 'y') {
          cuk();
        } if(repeat == 'n'){
          printf("\n\nThanks for using this program, have a good one!\n\n");
          break;
      }
    }
  }
}
