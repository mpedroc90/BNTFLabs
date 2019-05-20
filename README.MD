# BTNF Application Test

## Description
This project is an application test to BTNFLabs. You can access to deployed instance in heroku using this link https://bntf-test.herokuapp.com/

## Build Docker Image
  * `cd path_to_project`
  * `docker build . -t bntf`
  * `docker run --rm -p 3000:3000 -e API_URL='http://netzone.cl/bntf/api.users.prueba/skeleton/api' bntf`
## Launch Project without docker
 * `cd path_to_project`
 * `npm start`
## Launch Project 
Browse to http://localhost:3000
