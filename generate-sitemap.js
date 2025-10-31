const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const hostname = 'https://pakistanimountaintours.com';

const pages = [
  '/',
  '/about',
  '/best-places',
  '/gallery',
  '/Contact',
  '/place-detail/Karakoram And Himalayas',
  '/placeDetailHunza/Hindu Kush And Karakoram',
  '/fairyMedowsDetail/Gilgit Balistan Tour',
  '/autumnDetail/Spring-autumn-tour',
  '/lakeDetail/South Pakistan’s Cultural Heritage',
  '/nalterDetail/Pakistan’s Cultural, Historical & Religious Tour',
  '/trekkingDetail/k2-base-camp',
  '/trekkingDetail/Rush-peak-Trek',
  '/trekkingDetail/rakaposhi-base-camp',
  '/adventureDetail/deosai',
  '/adventureDetail/fairy-meadows',
  '/adventureDetail/astore',
  '/bikeDetail/Skardu-Tour',
  '/bikeDetail/karakoram-Highway',
  '/bikeDetail/khunjerab-Pass'
];

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream(path.join(__dirname, 'dist', 'sitemap.xml'));
sitemap.pipe(writeStream);

pages.forEach((page) => {
  sitemap.write({ url: encodeURI(page), changefreq: 'weekly', priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap generated successfully!'))
  .catch((err) => console.error(err));
