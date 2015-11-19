# yql-wrapper

Simple meteor wrapper for [`node-yql`](https://github.com/derek/node-yql) ([Yahoo Query Language](https://developer.yahoo.com/)), only for server side. This package exposes the `YQL` object which is used for createing queries to Yahoo servers.

### Instalation
Just add the [khrone:yql-wrapper](https://atmospherejs.com/khrone/yql-wrapper) package to your meteor project.

### Usage
Get current weather and forecast for `Poznań, Poland`:
````
let query = new YQL(`select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Poznań, Poland") and u='c'`);
query.exec((error, data) => {
  console.log(data);
});
````
