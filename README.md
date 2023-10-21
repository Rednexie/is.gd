use multithreading to short links on is.gd.


`npm i && node .`


use command line arguments:


`node arg <threads> <delay>`



threads: is the number of workers, will be created using the cluster module.


delay: the wait time between each request, in milliseconds.
