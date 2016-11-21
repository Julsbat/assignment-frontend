import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import playerTpl from './templates/player.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')


var playerData = {
  'sergey': {
    name: 'Sergey',
    img: 'https://images.chesscomfiles.com/uploads/article/15588.6117e0c0.jpeg',
    description: 'On March 28, 2016, Sergey Karjakin became the Challenger to Magnus Carlsen in the World Chess Championship 2016 after winning the Candidates Tournament 2016 in Moscow.'
  },

  'magnus': {
    name: 'Magnus',
    img: 'https://images.chesscomfiles.com/uploads/article/15588.6117e0c0.jpeg',
    description: 'Carlsen is a former chess prodigy. He became a Grandmaster in 2004, at the age of 13 years, 148 days. This made him the third-youngest grandmaster in history.'
  }
};

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function players(ctx) {
  let player = playerData[ctx.params.player];
  if (player) {
    $app.html(playerTpl(player));
  }
  else
  {
    notFound();
  }
}

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/players/:player', players)
router('/contact', contact)
router('*', notFound)
router()
