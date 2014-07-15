var $j = jQuery;


$j('html').addClass('jsActivated');

$j(document).ready(function(){			
	"use strict";

	MAX.initRollOverImg(document,"rollover","rollover_on", "_on", "activate"); //$j('#container1')
	var i, l;

	$j(function() {
		var products = $j("#productsList .product");
		var productsFilterLinks = $j("#productsFilter a");
		i=0;
		l = products.length;
		for(var product, title; i<l; i++)
		{
			
			product = $j(products[i]);
			title = product.find('.title').html().toLowerCase();
			if(title.indexOf('stove') > -1)
			{
				product.addClass('stove');
			}
			if(title.indexOf('dishwasher') > -1)
			{
				product.addClass('dishwasher');
			}
			if(title.indexOf('drier') > -1 || title.indexOf('dryer') > -1)
			{
				product.addClass('dryer');
			}
			if(title.indexOf('refrigerator') > -1)
			{
				product.addClass('refrigerator');
			}
			if(title.indexOf('cellar') > -1)
			{
				product.addClass('cellar');
			}
			if(title.indexOf('freezer') > -1)
			{
				product.addClass('freezer');
			}
			if(title.indexOf('washer') > -1)
			{
				product.addClass('washer');
			}
		}

		i=0;
		l = productsFilterLinks.length;
		for(var filter; i<l; i++)
		{
			
			filter = $j(productsFilterLinks[i]);
			var type = filter.attr('class');
			if(type.indexOf('all') > -1) continue;
			if(!$j("#productsList ." + type).length)
			{
				filter.hide();
			}
			else
			{
			    filter.show(); 
			}
		}
		
		productsFilterLinks.click(function(e) {
			i=0;
			l = productsFilterLinks.length;
			for(var filter; i<l; i++)
			{
				filter = $j(productsFilterLinks[i]);
				filter.removeClass('active');
			}
			var currentFilter =  $j(e.currentTarget);
			var type = currentFilter.attr('class');
			currentFilter.addClass('active');
			var fadeCounter=100;
			i=0;
			l = products.length;
			for(var product; i<l; i++)
			{
				product = $j(products[i]);
				if(type == "all")
				{
					product.show(fadeCounter);
					fadeCounter += 5;
				}
				else
				{
					if(product.hasClass(type)) 
					{
						product.show(fadeCounter);
						fadeCounter += 10;
					}
					else 
					{
						product.hide();
					}
				}
			}
		});
	});
});

$j(window).load(function(){	
    "use strict";
});
