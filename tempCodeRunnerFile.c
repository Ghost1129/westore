#include <stdio.h>
int binarySearch(int arr[], int n, int x)
{
    int l = 0, r = n - 1, m;
    while (l <= r)
    {
        m = l + (r - l) / 2;
        if (arr[m] == x)
        {
            printf("Element found at index %d\n", m);
            return m;
        }
        else if (arr[m] < x)
            l = m + 1;
        else
            r = m - 1;
    }
    printf("Element not found");
};