function place_bet(options)
{
try {
   
    options.method = 'POST';
	options.path = 'pmb_services/pmb_bet_add.json';
	options.service = 'pmb_bet_add';
	options.resource = 'pmb_services';
	console.log(options);
    Drupal.services.call(options);
  }
  catch (error) { console.log('market_place_bet - ' + error); }
}

