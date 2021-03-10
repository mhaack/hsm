export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603801bc7290ec4071c9114c',
                  title: 'Sanity Studio',
                  name: 'smc-studio',
                  apiId: '1963ec5c-e969-433c-9025-5ca20503a25d'
                },
                {
                  buildHookId: '603801bc9af283409623e7e7',
                  title: 'Landing pages Website',
                  name: 'scm-web',
                  apiId: '7ee2d31a-a1f4-4513-87a0-dcbae53c5783'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhaack/hsm',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://scm-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
