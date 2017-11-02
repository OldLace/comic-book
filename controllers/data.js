// require('isomorphic-fetch');
const fetch = require('node-fetch');

const goodreads = require('goodreads');
const http = require('http');
const url =require('url');


let gr = new goodreads.client({ 'key': key, 'secret': secret });

let onRequest = function(req, res) {
  let parse = url.parse(req.url, true)
  let { pathname } = parse, gr
  let dump = json => {json && res.write(JSON.stringify(json)); res.end()}
  console.log(`request for [${pathname}] received`)

  case '/series': case '/series/':
  console.log('Getting list of books from series 40650')
  gr = goodreads.client({ 'key': key, 'secret': secret })
  return gr.getSeries('146415').then(json=> dump(json))
