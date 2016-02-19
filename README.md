# gateway
Gateway for molecular-playground.

You will need Docker to automate building the project and running it. Get Docker [here](https://docs.docker.com/engine/installation/).

### To Run
**1.** Make sure you have a Docker virtual machine running. <br>
**2.** Within the virtual machine, navigate to the root directory of this repository.<br>
**3.** `docker build -t gateway .`<br>
**4.** `docker run -p 8000:8000 `<br>
**5.** From your browser, go to `<docker-machine-ip>:8000` (e.g. 192.168.99.100:8000)
