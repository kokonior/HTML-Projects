def checkpalindrome( ):
	ask = input("Check Palindrome/Not :  ")
	print(ask[::-1])
	if ask[::] == ask[::-1]:
		print ("Palindrome")
	else:
		print ("Not Palindrome")

checkpalindrome( )
