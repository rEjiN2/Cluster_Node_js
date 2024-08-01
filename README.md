# install the loadtest package 
   
   npm install loadtest

   OR

# just 

   npm install

#  start the both file using 

    node app.js
    node withoutClusterApp.js

# check the difference of the perfomance time of app using

   #For without cluster
     loadtest -c 10 --rps 100 -n 100 http://localhost:4000/clusterTest

   #For with cluster
     loadtest -c 10 --rps 100 -n 100 http://localhost:3000/clusterTest  
