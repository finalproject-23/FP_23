module.exports = {
 staticFileGlobs: [
  '**/**.html',
  'assets/**/**.css',
  'assets/**/**.html',
  'assets/**/**.jpg',
  'assets/**/**.svg',
  'assets/**/**.png',
  'assets/**/**.webp',
  'assets/**/**.ico',
  'assets/**/**.eot',
  'assets/**/**.otf',
  'assets/**/**.ttf',
  'assets/**/**.woff',
  'assets/**/**.woff2'
 ],
 runtimeCaching: [{
  urlPattern: /^https:\/\/artterror\.cf\//,
  handler: 'networkFirst'
 }]
};