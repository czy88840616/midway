const path = require('path');

module.exports = () => {
  return [
    {
      name: 'cnzz-analytics',
      injectHtmlTags: () => {
        return {
          postBodyTags: [
            `<script type="text/javascript">document.write(unescape("%3Cspan style='display: none' id='cnzz_stat_icon_1279723477'%3E%3C/span%3E%3Cscript src='https://v1.cnzz.com/z_stat.php%3Fid%3D1279723477' type='text/javascript'%3E%3C/script%3E"));</script>`,
          ],
        };
      },
    },
    [
      'docusaurus-plugin-typedoc-api',
      {
        projectRoot: path.join(__dirname, '../../'),
        changelogs: true,
        packages: [
          'packages',
          'packages-serverless'
        ],
        typedocOptions: {
          readme: 'none',
          tsconfig: '../tsconfig.json',
          excludeExternals: true,
          excludePrivate: true,
          excludeProtected: true,
          excludeInternal: true,
          externalPattern: '**/node_modules/*',
          cleanOutputDir: true,
        },
      },
    ],
  ]
};
