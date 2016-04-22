# gateway
A microservice for redirecting API calls.

All installation is done automatically through docker. If you do not have docker installed, install [here](https://docs.docker.com/engine/installation/).

### To Run using Docker Compose (Recommended)
The easiest way to run for production is to use the docker-compose file that can be found [here](https://github.com/molecular-playground/molecular-playground). It is possible however to run the container manually. The following instructions can be used to deploy manually for both production and development environments.

### Setup
This microservice uses environment variables to make it easier to deploy at different locations. You will need to create a file named ```molecular-playground.env``` one level above this directory for deployment to work properly. The following environment variables are used in this microservice:

- ```SIGNING_KEY``` - The key used to sign authentication tokens.

Below is an example of what your ```molecular-playground.env``` should look like using the above environment variables. ```YOUR_VALUE_HERE``` is simply a placeholder for your own value.
```
SIGNING_KEY=YOUR_VALUE_HERE
```

To make sure everything works correctly, make sure you use the same values for each microservice you are using. This can be easily done by using the same molecular-playground.env file.

### To Run Manually (Production)
Before we begin, make sure you have the following microservices running in containers:

- [databaes](https://github.com/molecular-playground/databaes)
- [ms-email](https://github.com/molecular-playground/ms-email)
- [ms-login](https://github.com/molecular-playground/ms-login)
- [ms-molecules](https://github.com/molecular-playground/ms-molecules)
- [ms-schedule](https://github.com/molecular-playground/ms-schedule)
- [ms-users](https://github.com/molecular-playground/ms-users)

Once they are all running, navigate to the top directory of this repository. Enter the following commands:
```
docker build -t gateway .
docker run -d --name gateway -p 3000:3000 --link login:login --link molecules:molecules --link schedule:schedule --link users:users --env-file ../molecular-playground.env gateway
# where the names of the microservice containers are on the left side of the :
```

This will run your container 'detached'. Here are some useful commands to interact with a detached container:
```
# kill a container
docker kill gateway

# view output
docker logs -f gateway

# restart a container
docker restart -t=0 gateway
```

### To Run Manually (Development)
The easiest way to develop using the docker container is to mount your working directory as a volume. Before we begin, you will still need the other microservices running in containers. Look above for the full list.

Once they are all running, navigate to the top directory of this repository. Enter the following commands:
```
docker build -t gateway .
docker run --rm -i -t -p 3000:3000 --link login:login --link molecules:molecules --link schedule:schedule --link users:users --env-file ../molecular-playground.env -v $PWD:/src gateway /bin/sh
# where the names of the microservice containers are on the left side of the :
# where $PWD is a variable to your current directory and may need changing if you are using a windows environment
```

This will run your container 'attached' and leave you in your source directory. All changes you make on your host machine (in this directory) will be present in your container. Run ```npm install``` and ```npm start``` in your container to test, just as if you were only using your host machine. To kill the container from inside the container, type in ```exit```.
