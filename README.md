lack of rate limiting vulnerabiliy.

use multithreading to short links on is.gd.


`npm i && node .`


use command line arguments:


`node arg <threads> <delay>`



threads: is the number of workers, will be created using the cluster module.


delay: the wait time between each request, in milliseconds.



What should is.gd developers do:
- Add a rate limit for ip addresses, user agents or links.
- Slice the link parameters, so multiple links can not be generated.
- Require the usage of the api keys to generate links
