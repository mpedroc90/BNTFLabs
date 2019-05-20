#BTNF test

##Description
This project is an application test to BTNF labs. 


##Steps to launch the project 
  `cd path_to_project`
  `docker build . -t bntf`
  `docker run --rm -p 3000:3000 -e API_URL='http://netzone.cl/bntf/api.users.prueba/skeleton/api' bntf`

Browse to http://localhost:3000
