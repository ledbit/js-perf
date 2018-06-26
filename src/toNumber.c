#include "stdio.h"
#include "stdlib.h"

#include <sys/time.h>
#include <sys/resource.h>

double now()
{
    struct timeval t;
    struct timezone tzp;
    gettimeofday(&t, &tzp);
    return (t.tv_sec + t.tv_usec*1e-6)*1000;
}


int main(int argc, char* argv[]) {
   if(argc < 2) {
     printf("usage: %s <string>\n", argv[0]);
     exit(1);
   }
   const char* x = argv[1];
   double k = 0;
   size_t count = 100000000;
   double start = now();
   for(size_t i=0; i<count; i++) {
      k = atof(x);
   }
   
   printf("rate, x=%s: %.0f Kps\n", x, (count/(now() - start)));

}


