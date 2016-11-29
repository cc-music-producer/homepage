var portfolio = [{ 
	"Id": "portfolio01",
	"AltText": "",
	"Image": "01",
	"Type": "album",
	"Artist": "Saint Judas", 
	"Title": "War Within", 
	"Blurb": '“Saint Judas is a five piece heavy metal band influenced from 70s progressive rock and Metal along with Thrash/Stoner elements, fused with modern sound and production. Add the female powerful vocals, and analog synths, and  an amalgam of sounds and grooves is formed.”',
	"Credits": ["Music & Lyrics by Marios Danos", "Produced by Marios Danos & Chris Charalambides (C.C.)", "Recorded and Mixed at Soundscape Studios by Chris Charalambides (C.C.)", "Mastered by Marios Hadjikos, CY"],
	"Links": ["https://www.facebook.com/SaintJudasBand", "https://www.reverbnation.com/saintjudasband", "https://myspace.com/saint.judas"]
},
{ 
	"Id": "portfolio02",
	"AltText": "",
	"Image": "02",
	"Type": "album",
	"Artist": "Ermis Michail Quintet", 
	"Title": "Minor Change", 
	"Blurb": '“The quintet was founded in 2011 and consists musicians from the Netherlands, Chile the United Kingdom and Cyprus. This multi-national group is comprised by some of the brightest, emerging jazz artists performing original compositions by Cypriot guitarist Ermis Michail.”',
	"Credits": ["Music & Arrangement by Ermis Michail ", "Recorded and Mixed at Soundscape Studios by Chris Charalambides (C.C.)", "Mastered by ?????, USA"],
	"Links": ["https://itunes.apple.com/cy/album/minor-change/id1099483723", "http://www.cdbaby.com/cd/ermismichail?SourceCode=widgetbaby"]
},
{ 
	"Id": "portfolio03",
	"AltText": "",
	"Image": "03",
	"Type": "album",
	"Artist": "Spirit Level", 
	"Title": "Kolossi Blues", 
	"Blurb": '“A fusion of blues, rock, country and celtic music.”',
	"Credits": ["Lyrics by Chris Louvieris", "Music by Chris Louvieris & Chris Kyriakou", "Produced by Spirit Level", "Recorded Chris Louvieris, Chris Kyriakou & Chris Charalambides (C.C.)", "Mixed by Chris Charalambides (C.C.) at Soundscape Studios", "Mastered by Andrew Mendelson at Georgetown Masters, Nashville, USA"]
},
{ 
	"Id": "portfolio04",
	"AltText": "",
	"Image": "04",
	"Type": "single",
	"Artist": "Stelios Ioakim", 
	"Title": "The Path", 
	"Blurb": '“Stelios is a progressive rock composer/songwriter.”',
	"Credits": ["Lyrics by Stelios Ioakim", "Music by Stelios Ioakim", "Produced by Chris Charalambides (C.C.) & Stelios Ioakim", "Recorded and Mixed by Chris Charalambides (C.C.) at Soundscape Studios", "Mastered by Björn Engelmann, Cutting Room, Stockholm, SWE"]
},
{ 
	"Id": "portfolio05",
	"AltText": "",
	"Image": "05",
	"Type": "album",
	"Artist": "Finding Kate", 
	"Title": "If I Fall", 
	"Blurb": '“Kate Pavli’s greatest asset is undoubtedly vocal power. Whether this can be put down to her childhood background in musical theatre, her Greco-Australian flare, or something entirely different, the fact is, very few leave a ‘Finding Kate’ show uncertain of this. The songs on If I Fall are deep, emotional and allow you to seamlessly submerge yourself into them. It’s an album full of punchy rock melodies, a lot of feelings and a good measure of sass.”',
	"Credits": ["Lyrics by Rushil Ranjan, Kate Pavli, Chris Charalambides (C.C.)", "Music by Chris Charalambides (C.C.)", "Produced by Chris Charalambides (C.C.)", "Recorded and Mixed by Chris Charalambides (C.C.) at Soundscape Studios", "Mastered by Alex Psaroudakis at Sterling Sound, New York, USA"],
	"Links": ["Website: http://www.findingkatemusic.com", "Facebook: https://www.facebook.com/FindingKate/", "Twitter: https://twitter.com/FindingKate",
		"Finding Kate - “Forever”\nFrom the debut album “If I Fall”\nAvailable for pre-orders now.\niTunes: http://smarturl.it/findingkate-IfIFall\nGoogle Play: http://smarturl.it/findingkate-gp"]
}
]


// ==========================================================

function PortfolioHtml(id, index, imageName, altText, type) {
	var itemHtml = '<div class="col-md-3 col-xs-12 mix ' + type + '" data-myorder="' + index + '">'
		+ '<a href="#" data-toggle="modal" data-target="#' + id + '">'
		+ '<div class="img-wrap">'
		+ '<img src="assets/img/portfolio/' + imageName + '.jpg" alt="' + altText + '" class="img-responsive center-block" width="100%" style="vertical-align: middle">'
		+ '<div class="img-overlay"></div>'
		+ '</div>'
		+ '</a>'
		+ '</div>';
	return itemHtml;
}

function GeneratePortfolioItemsHtml(items) {	
	var itemsHtml = [];
	for (var i = 0; i < items.length; i++) {
		itemsHtml.push(PortfolioHtml(items[i].Id, i+1, items[i].Image, items[i].AltText, items[i].Type));
	}
	return itemsHtml;
}

jQuery(function() {

	var fullHtml = "";
	var itemsHtml = GeneratePortfolioItemsHtml(portfolio);
	for (var i = 0; i < itemsHtml.length; i++) {
		if (i % 4 == 0) {
			fullHtml += '<div class="row">';
		}
		fullHtml += itemsHtml[i];
		if (i % 4 == 3) {
			fullHtml += "</div>";
		}
	}
	if (itemsHtml.length - 1 % 4 != 3) {
		fullHtml += "</div>";
	}
		
	//$("#portfolio-items").text(fullHtml);	
	
});