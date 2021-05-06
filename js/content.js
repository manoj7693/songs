var imgdir = 'img/songs/';
var songdir = 'songs/';
var songs = [
	{
		id: 1,
		mainscover: imgdir + 'mainbg1.png',
		mainsimg: imgdir + 'mains1.png',
		smallimg: imgdir + 'small1.png',
		playsongtitle: 'Call Me A Spaceman',
		playsubname: 'Hardwell Ft. Mitch Crown',
		playsongtime: '06:19',
		link: songdir + 'cmas.mp3'
	},
	{
		id: 2,
		mainscover: imgdir + 'mainbg2.png',
		mainsimg: imgdir + 'mains2.png',
		smallimg: imgdir + 'small2.png',
		playsongtitle: 'Wake Me Up',
		playsubname: 'Avicii',
		playsongtime: '04:29',
		link: songdir + 'wmu.mp3'
	},
	{
		id: 3,
		mainscover: imgdir + 'mainbg3.png',
		mainsimg: imgdir + 'mains3.png',
		smallimg: imgdir + 'small3.png',
		playsongtitle: 'Summertime Sadness',
		playsubname: 'Born To Die',
		playsongtime: '04:24',
		link: songdir + 'sumsad.mp3'
	},
	{
		id: 4,
		mainscover: imgdir + 'mainbg4.png',
		mainsimg: imgdir + 'mains4.png',
		smallimg: imgdir + 'small4.png',
		playsongtitle: 'Ocarina',
		playsubname: 'Dimitri Vegas & Like Mike',
		playsongtime: '05:17',
		link: songdir + 'ocarina.mp3'
	},
	{
		id: 5,
		mainscover: imgdir + 'mainbg5.png',
		mainsimg: imgdir + 'mains5.png',
		smallimg: imgdir + 'small5.png',
		playsongtitle: 'Mirrors',
		playsubname: 'Justin Timberlake',
		playsongtime: '08:04',
		link: songdir + 'mirrors.mp3'
	},
	{
		id: 6,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'I Wish',
		playsubname: 'One Direction',
		playsongtime: '03:36',
		link: songdir + 'upallnight.mp3'
	},
	{
		id: 7,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'trip',
		playsubname: 'stiil_coner',
		playsongtime: '06:14',
		link: songdir + 'trip.mp3'
	},
                 {
		id: 8,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'she',
		playsubname: 'harry',
		playsongtime: '06:02',
		link: songdir + 'she.mp3'
	},
                 {
		id: 9,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'waves',
		playsubname: 'naxtras',
		playsongtime: '07:16',
		link: songdir + 'waves.mp3'
	},
	{
		id: 10,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'stairway to heaven',
		playsubname: 'led',
		playsongtime: '08:05',
		link: songdir + 'swth.mp3'
	},
	 {
		id: 11,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'the sky is crying',
		playsubname: 'bb',
		playsongtime: '09:13',
		link: songdir + 'sic.mp3'
	},
                 {
		id: 12,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'study',
		playsubname: 'unknown',
		playsongtime: '61:03',
		link: songdir + 'study.mp3'
	},
                  {
		id: 13,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'sf',
		playsubname: 'adele',
		playsongtime: '04:02',
		link: songdir + 'sf.mp3'
	},
                  {
		id: 14,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'someone',
		playsubname: 'adele',
		playsongtime: '04:45',
		link: songdir + 'spmeone.mp3'
	},
                  {
		id: 15,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'levels',
		playsubname: 'avicii',
		playsongtime: '03:18',
		link: songdir + 'levels.mp3'
	}
];
var template = Handlebars.compile( $("#template").html() );
$("#playlist ul").append( template(songs) );
