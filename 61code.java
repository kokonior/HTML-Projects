// C++14 program for the above approach
#include <bits/stdc++.h>
using namespace std;

// Function to calculate the last
// remaining element from the sequence
int lastRemaining(int n, map<int, int> &dp)
{
	
	// If dp[n] is already calculated
	if (dp.find(n) != dp.end())
		return dp[n];

	// Base Case:
	if (n == 1)
		return 1;
	
	// Recursive call
	else
		dp[n] = 2 * (1 + n / 2 -
		lastRemaining(n / 2, dp));

	// Return the value of dp[n]
	return dp[n];
}

// Driver Code
int main()
{
	
	// Given N
	int N = 5;
	
	// Stores the
	map<int, int> dp;
	
	// Function call
	cout << lastRemaining(N, dp);
	
	return 0;
}

// This code is contributed by mohit kumar 29
