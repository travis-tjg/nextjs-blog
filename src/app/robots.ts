import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // Define blocked bots
  const blockedBots = [
    'Apache-HttpClient', 'curl', 'LCC', '007ac9-Crawler', '2ip.ru', '360Spider', 'A6-Indexer', 'Aboundex',
    'acapbot', 'acoonbot', 'adbeat_bot', 'AddSearchBot', 'AddThis', 'ADmantX', 'adscanner', 'AdsTxtCrawler',
    'AdvBot', 'AHC', 'Ahrefs', 'AhrefsBot', 'aiHitBot', 'AISearchBot', 'AlphaBot', 'Amazonbot',
    'AndersPinkBot', 'antibot', 'AnyEvent', 'Apercite', 'AppInsights', 'Applebot', 'arabot', 'ArchiveBot',
    'AspiegelBot', 'AwarioRssBot', 'AwarioSmartBot', 'awesomecrawler', 'axios', 'backlinkcrawler', 'Baiduspider',
    'Baidu-YunGuanCe', 'BarkRowler', 'BazQux', 'BDCbot', 'BehloolBot', 'betaBot', 'bidswitchbot', 'BIGLOTRON',
    'binlar', 'BitBot', 'bitlybot', 'Blackboard', 'BLEXBot', 'blogmuraBot', 'BLP_bbot', 'bnf.fr_bot',
    'BomboraBot', 'Bot.AraTurka.com', 'botify', 'bot-pge.chlooe.com', 'BoxcarBot', 'brainobot', 'BrandONbot',
    'BrandVerity', 'BTWebClient', 'BublupBot', 'Buck', 'buzzbot', 'Bytespider', 'Caliperbot', 'CapsuleChecker',
    'careerbot', 'CCBot', 'changedetection', 'check_http', 'CheckMarkNetwork', 'Chrome-Lighthouse', 'Cincraw',
    'citeseerxbot', 'Clickagy', 'Cliqzbot', 'CloudFlare-AlwaysOnline', 'coccoc', 'Companybook-Crawler', 'contxbot',
    'convera', 'crawler4j', 'CrunchBot', 'CrystalSemanticsBot', 'Curebot', 'Cutbot', 'cXensebot', 'CyberPatrol',
    'DareBoost', 'Datafeedwatch', 'datagnionbot', 'Datanyze', 'Daum', 'dcrawl', 'deadlinkchecker', 'DeuSu',
    'Diffbot', 'discobot', 'Discordbot', 'Disqus', 'DnyzBot', 'domaincrawler', 'DomainStatsBot', 'dotbot',
    'DotBot', 'Dragonbot', 'drupact', 'Dubbotbot', 'DuckDuckBot', 'DuckDuckGo-Favicons-Bot', 'ec2linkfinder',
    'edisterbot', 'electricmonk', 'elisabot', 'Embedly', 'epicbot', 'eright', 'EveryoneSocialBot', 'exabot',
    'Experibot', 'ExtLinksBot', 'Eyeotabot', 'EZID', 'ezooms', 'facebookexternalhit', 'Facebot', 'FAST-WebCrawler',
    'fedoraplanet', 'feedbot', 'Feedly', 'Feedspot', 'FeedValidator', 'FemtosearchBot', 'Fetch', 'Fever',
    'FindITAnswersbot', 'findlink', 'findthatfile', 'findxbot', 'FlipboardProxy', 'fluffy', 'fr-crawler',
    'FreshRSS', 'Friendica', 'fuelbot', 'Fyrebot', 'g2reader-bot', 'GarlikCrawler', 'Genieo', 'Gigablast',
    'Gigabot', 'GingerCrawler', 'GnowitNewsbot', 'Go-http-client', 'Gowikibot', 'GrapeshotCrawler', 'Grobbot',
    'GroupHigh', 'grub.org', 'gslfbot', 'Gwene', 'Hatena', 'HeadlessChrome', 'heritrix', 'http_get',
    'httpunit', 'HttpUrlConnection', 'HTTrack', 'HubSpot', 'ia_archiver', 'IAS-crawler', 'ICBot', 'ICC-Crawler',
    'ichiro', 'imrbot', 'IndeedBot', 'infoobot', 'integromedb', 'intelium_bot', 'InterfaxScanBot', 'ips-agent',
    'ip-web-crawler.com', 'iskanie', 'IstellaBot', 'it2media-domain-crawler', 'James-BOT', 'Jamie\'s-Spider',
    'Jetslide', 'Jetty', 'JobboerseBot', 'Jooblebot', 'jpg-newsbot', 'Jugendschutzprogramm-Crawler', 'jyxobot',
    'K7MLWCBot', 'Kemvibot', 'KosmioBot', 'Landau-Media-Spider', 'Laserlikebot', 'lb-spider', 'Leikibot',
    'libwww-perl', 'Linguee-Bot', 'linkapediabot', 'LinkArchiver', 'linkdex', 'LinkedInBot', 'LinkisBot',
    'lipperhey', 'LivelapBot', 'lssbot', 'lssrocketcrawler', 'ltx71', 'Luminator-robots', 'magpie-crawler',
    'Mail.RU_Bot', 'mappydata', 'Mastodon', 'MauiBot', 'MBCrawler', 'Mediapartners', 'Mediatoolkitbot',
    'MegaIndex', 'MeltwaterNews', 'memorybot', 'MetaJobBot', 'MetaURI', 'mindUpBot', 'Miniflux', 'MixnodeCache',
    'MJ12bot', 'mlbot', 'moatbot', 'MojeekBot', 'MoodleBot', 'Moreover', 'msnbot', 'msrbot', 'MuckRack',
    'Multiviewbot', 'NerdByNature.Bot', 'nerdybot', 'NetcraftSurveyAgent', 'Neticle-Crawler', 'netresearchserver',
    'Netvibes', 'newsharecounts', 'newspaper', 'NextCloud', 'niki-bot', 'Nimbostratus-Bot', 'NING', 'NINJAbot',
    'NIXStatsbot', 'NTENTbot', 'nutch', 'Nuzzel', 'Ocarinabot', 'officestorebot', 'okhttp', 'omgili',
    'online-webceo-bot', 'OpenHoseBot', 'openindexspider', 'OrangeBot', 'outbrain', 'OutclicksBot', 'page2rss',
    'PagePeeker', 'Pandalytics', 'panscient', 'PaperLiBot', 'Pcore-HTTP', 'PetalBot', 'PhantomJS', 'phpcrawl',
    'pingdom', 'pinterest.com.bot', 'PiplBot', 'PocketParser', 'postrank', 'PR-CY.RU', 'Primalbot', 'PrivacyAwareBot',
    'proximic', 'psbot', 'Pulsepoint', 'purebot', 'python-requests', 'Python-urllib', 'Qwantify', 'RankActiveLinkBot',
    'redditbot', 'Refindbot', 'RegionStuttgartBot', 'RetrevoPageAnalyzer', 'RidderBot', 'Rivva', 'rogerbot',
    'rssbot', 'RSSingBot', 'RyteBot', 'SafeDNSBot', 'SafeSearch-microdata-crawler', 'SBL-BOT', 'ScoutJet',
    'Scrapy', 'Screaming-Frog-SEO-Spider', 'scribdbot', 'SearchAtlas', 'seekbot', 'Seekport-Crawler', 'seewithkids',
    'semanticbot', 'SemanticScholarBot', 'SEMrushBot', 'SentiBot', 'SeobilityBot', 'SEOkicks', 'seoscanners',
    'SerendeputyBot', 'serpstatbot', 'seznambot', 'SimpleCrawler', 'SimplePie', 'SimpleScraper', 'sistrix-crawler',
    'sitebot', 'siteexplorer.info', 'Siteimprove.com', 'SkypeUriPreview', 'Slackbot', 'Slack-ImgProxy', 'Slurp',
    'smtbot', 'Snacktory', 'SocialRankIOBot', 'Sogou', 'Sonic', 'spbot', 'speedy', 'startmebot', 'StorygizeBot',
    'Streamline3Bot', 'summify', 'Superfeedr', 'SurdotlyBot', 'SurveyBot', 'SWIMGBot', 'Sysomos', 'Taboolabot',
    'tagoobot', 'TangibleeBot', 'TelegramBot', 'Teoma', 'theoldreader.com', 'Thinklab', 'tigerbot', 'TinEye',
    'Tiny-Tiny-RSS', 'toplistbot', 'ToutiaoSpider', 'Traackr.com', 'tracemyfile', 'trendictionbot', 'TrendsmapResolver',
    'Trove', 'TurnitinBot', 'tweetedtimes', 'TweetmemeBot', 'twengabot', 'Twingly', 'Twitterbot', 'Twurly',
    'um-LN', 'Upflow', 'Uptimebot.org', 'UptimeRobot', 'urlappendbot', 'UsineNouvelleCrawler', 'UT-Dorkbot',
    'Validator.nu', 'vebidoobot', 'VelenPublicWebCrawler', 'Veoozbot', 'Vigil', 'VKRobot', 'vkShare', 'voilabot',
    'VoluumDSP-content-bot', 'W3C_CSS_Validator', 'W3C_I18n-Checker', 'W3C_Unicorn', 'W3C_Validator', 'W3C-checklink',
    'W3C-mobileOK', 'wbsearchbot', 'web-archive-net.com.bot', 'webcompanycrawler', 'WebDataStats', 'webmon',
    'WeSEE:Search', 'WhatsApp', 'wocbot', 'woobot', 'WordupInfoSearch', 'woriobot', 'wotbox', 'www.uptime.com',
    'Xenu-Link-Sleuth', 'xovibot', 'Y!J', 'yacybot', 'Yahoo-Link-Preview', 'YaK', 'YandexAccessibilityBot',
    'YandexBot', 'YandexImageResizer', 'YandexImages', 'YandexMetrika', 'YandexMobileBot', 'YandexTurbo',
    'YandexVideoParser', 'yanga', 'Yeti', 'YisouSpider', 'yoozBot', 'Zabbix', 'zenback-bot', 'zgrab',
    'ZoomBot', 'ZoominfoBot', 'ZumBot', 'ZuperlistBot'
  ];

  // Create rules array with default allow all and specific bot blocks
  const rules = [
    {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/',
    },
    // Block specific bots
    ...blockedBots.map(bot => ({
      userAgent: bot,
      disallow: '/',
    })),
    // Explicitly allow major search engines
    {
      userAgent: 'Googlebot',
      allow: '/',
      disallow: '/_next/',
    },
    {
      userAgent: 'Bingbot',
      allow: '/',
      disallow: '/_next/',
    },
    {
      userAgent: 'Mozilla',
      allow: '/',
      disallow: '/_next/',
    }
  ];

  return {
    rules,
    sitemap: 'https://bingbangboom.org/sitemap.xml',
  };
}