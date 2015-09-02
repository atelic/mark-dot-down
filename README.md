# `Mark.down();`
A collaborative markdown editor written in Express.js which uses Sharejs for live editing capabilities.

### Installing and running
```bash
$ git clone https://github.com/barbour-em/mark-dot-down
$ cd mark-dot-down
$ npm install
$ node server.js
```

Install [Redis](http://redis.io/) and run its server:

```bash
$ wget http://download.redis.io/releases/redis-3.0.3.tar.gz
$ tar xzf redis-3.0.3.tar.gz
$ cd redis-3.0.3
$ make
$ src/redis-server
```

### Using
- Type  markdown into the left panel and see it rendered in the right.
- Send someone else a link to anywhere except the homepage to work on it at the same time.
