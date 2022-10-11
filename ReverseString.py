def reverse_string(str):  
    str1 = ""  
    for i in str:  
        str1 = i + str1  
    return str1     
     
str = "HelloWorld"     
print("The original string is: ",str)  
print("The reverse string is",reverse_string(str))
