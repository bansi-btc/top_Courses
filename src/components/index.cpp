#include<bits/stdc++.h>
using namespace std; 

int main(){
    map<int, int> m1;

    m1[4]=21;
    m1[2]=1;
    m1[6]=62;

    auto it=m1.begin();
    
    int t=*it;
    cout<<t;
    return 0;
}